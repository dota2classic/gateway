import { MatchmakingMode } from '../../shared-types/matchmaking-mode';
import { DotaTeam } from '../../shared-types/dota-team';
import { Dota_GameMode } from '../../shared-types/dota-game-mode';

export interface PlayerInMatchDTO {
  readonly steam_id: string;
  readonly team: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly level: number;
  
  readonly item0: number;
  readonly item1: number;
  readonly item2: number;
  readonly item3: number;
  readonly item4: number;
  readonly item5: number;
  
  readonly gpm: number;
  readonly xpm: number;
  readonly last_hits: number;
  readonly denies: number;
  readonly abandoned?: boolean;

  readonly hero: string;
}

export class GameResultsEvent {
  constructor(
    public readonly matchId: number,
    public readonly winner: DotaTeam,
    public readonly duration: number,
    public readonly gameMode: Dota_GameMode,
    public readonly type: MatchmakingMode,
    public readonly timestamp: number,
    public readonly server: string,
    public readonly players: PlayerInMatchDTO[],
  ) {}
}
