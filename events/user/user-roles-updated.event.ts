import { PlayerId } from '../../shared-types/player-id';
import { Role } from '../../shared-types/roles';

export class UserRolesUpdatedEvent {
  constructor(public readonly id: PlayerId, public readonly roles: Role[]) {
  }
}