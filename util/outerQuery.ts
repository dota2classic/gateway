import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { Type } from '@nestjs/common';

export function outerQuery<T, B>(
  type: Type<T>,
  provide: string = 'RedisQueue',
): any {
  // Small trick to set class.name dynamically, it is needed for nestjs
  const ClassName = `${type.name}Handler`;
  const context = {
    [ClassName]: class implements IQueryHandler<T, B> {
      constructor(private readonly redis: ClientProxy) {}

      execute(query: T): Promise<B> {
        return this.redis.send<B>(type.name, query).toPromise();
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
