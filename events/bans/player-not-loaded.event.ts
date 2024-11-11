import { PlayerId } from '../../shared-types/player-id';
import { MatchmakingMode } from '../../shared-types/matchmaking-mode';

export class PlayerNotLoadedEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly matchId: number,
    public readonly mode: MatchmakingMode
  ) {}
}
