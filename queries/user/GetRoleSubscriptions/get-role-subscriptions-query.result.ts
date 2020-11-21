import { Role } from 'shared-types/roles';
import { PlayerId } from 'shared-types/player-id';

export class RoleSubscriptionEntry {
  end_time: number;
  role: Role;
  playerId: PlayerId;
}

export class GetRoleSubscriptionsQueryResult {
  constructor(public readonly entries: RoleSubscriptionEntry[]) {
  }
}