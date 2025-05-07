import { UserConnection } from '../shared-types/user-connection';

export class RemoveUserConnectionCommand {
  constructor(
    public readonly steamId: string,
    public readonly connection: UserConnection,
  ) {}
}
