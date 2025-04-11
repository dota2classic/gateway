import { PlayerInMatchDTO } from '../../events/gs/game-results.event';
import { MatchmakingMode } from '../../shared-types/matchmaking-mode';
import { DotaTeam } from '../../shared-types/dota-team';
import { Dota_GameMode } from '../../shared-types/dota-game-mode';

export class MatchRecordedEvent {
  constructor(
    public readonly matchId: number,
    public readonly winner: DotaTeam,
    public readonly duration: number,
    public readonly type: MatchmakingMode,
    public readonly gameMode: Dota_GameMode,
    public readonly timestamp: number,
    public readonly server: string,
    public readonly players: PlayerInMatchDTO[],
  ) {}
}
