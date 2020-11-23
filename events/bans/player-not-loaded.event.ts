import { PlayerId } from '../../shared-types/player-id';

export class PlayerNotLoadedEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly matchId: number,
  ) {}
}
