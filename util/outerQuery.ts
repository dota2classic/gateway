import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { Logger, Type } from '@nestjs/common';
import { performance } from 'perf_hooks';
import { timeout } from 'rxjs/operators';

export interface CacheMiddleware<T, B> {
  getCached(query: T): Promise<B | undefined>;
  setNew(query: T, value: B): Promise<void>;
}

export function outerQuery<T, B>(
  type: Type<T>,
  provide: string = 'RedisQueue',
  cache?: CacheMiddleware<T, B>,
): any {
  // Small trick to set class.name dynamically, it is needed for nestjs
  const ClassName = `${type.name}Handler`;
  const context = {
    [ClassName]: class implements IQueryHandler<T, B> {
      private readonly logger = new Logger(ClassName);
      constructor(private readonly redis: ClientProxy) {}

      async execute(query: T): Promise<B> {

        if (cache) {
          // @ts-ignore
          const cached = await cache.getCached([type.name, [query]]).catch((e) => {
            console.error('nooo', e)
          });
          if (cached) {
            return cached;
          }
        }
        const time = performance.now();

        try {
          return await this.redis
            .send<B>(type.name, query)
            .pipe(timeout(5000))
            .toPromise();
        } catch (e) {
          this.logger.error(e);
        } finally {
          const newTime = performance.now();

          if (newTime - time > 1000) {
            this.logger.warn(`${type.name} took ${newTime - time} to finish`);
          }
        }

        return undefined;
      }
    },
  };

  QueryHandler(type)(context[ClassName]);

  return {
    provide: context[ClassName],
    useFactory(core: ClientProxy) {
      return new context[ClassName](core);
    },
    inject: [provide],
  };
}
