import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ClientProxy } from "@nestjs/microservices";
import { Type } from "@nestjs/common";

export function outerQuery<T, B>(type: Type<T>, provide: string = "RedisQueue"): any {
  @QueryHandler(type)
  class A implements IQueryHandler<T, B> {
    constructor(private readonly redis: ClientProxy) {}

    execute(query: T): Promise<B> {
      return this.redis.send<B>(type.name, query).toPromise();
    }
  }


  return {
    provide: A,
    useFactory(core: ClientProxy) {
      return new A(core);
    },
    inject: [provide],
  };
}
