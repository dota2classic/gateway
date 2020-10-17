import { PlayerId } from '../../shared-types/player-id';
import { UserConnection } from '../../shared-types/user-connection';

export class ConnectionEntry {
  constructor(
    public readonly id: PlayerId,
    public readonly connection: UserConnection,
    public readonly externalId: string,
  ) {}
}

export class GetAllConnectionsQueryResult {
  constructor(public readonly entries: ConnectionEntry[]) {}
}
