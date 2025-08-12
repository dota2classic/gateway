import { MatchmakingMode } from '../../shared-types/matchmaking-mode';
import { PlayerId } from '../../shared-types/player-id';
import { Dota_GameRulesState } from '../../shared-types/dota-game-rules-state';

export class PlayerAbandonedEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly matchId: number,
    public readonly abandonIndex: number,
    public readonly mode: MatchmakingMode,
    public readonly gameState: Dota_GameRulesState,
  ) {}
}
