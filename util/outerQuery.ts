import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { Type } from '@nestjs/common';

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
      constructor(private readonly redis: ClientProxy) {}

      async execute(query: T): Promise<B> {
        if (cache) {
          // @ts-ignore
          const cached = await cache.getCached([type.name, [query]]);
          if (cached) {
            return cached;
          }
        }
        return await this.redis.send<B>(type.name, query).toPromise();
      }
    },
  };

  QueryHandler(type)(context[ClassName]);

  return {
    provide: `${type.name}Handler`,
    useFactory(core: ClientProxy) {
      return new context[ClassName](core);
    },
    inject: [provide],
  };
}
