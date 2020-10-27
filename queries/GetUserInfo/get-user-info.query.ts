import { PlayerId } from 'shared-types/player-id';

export class GetUserInfoQuery {
  constructor(public readonly playerId: PlayerId) {}
}
