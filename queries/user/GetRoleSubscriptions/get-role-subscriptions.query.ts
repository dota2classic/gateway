import { PlayerId } from 'shared-types/player-id';

export class GetRoleSubscriptionsQuery {
  constructor(public readonly id?: PlayerId) {
  }
}
