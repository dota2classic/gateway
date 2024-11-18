import { UserConnection } from "../../shared-types/user-connection";

export class GetByConnectionQuery {
  constructor(
    public readonly connection: UserConnection,
    public readonly externalId: string,
  ) {}
}
