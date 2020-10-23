import { PlayerId } from '../../shared-types/player-id';

export class GetSessionByUserQuery {
  constructor(public readonly playerId: PlayerId) {}
}
