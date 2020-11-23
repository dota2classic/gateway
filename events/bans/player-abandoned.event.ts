import { PlayerId } from '../../shared-types/player-id';

export class PlayerAbandonedEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly matchId: number,
  ) {}
}
