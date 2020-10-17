import { PlayerId } from '../../shared-types/player-id';
import { UserConnection } from '../../shared-types/user-connection';

export class UserConnectionCreatedEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly connection: UserConnection,
    public readonly externalId: string,
  ) {
  }
}