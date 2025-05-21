import { MatchmakingMode } from '../../shared-types/matchmaking-mode';
import { DotaTeam } from '../../shared-types/dota-team';
import { Dota_GameMode } from '../../shared-types/dota-game-mode';

export interface PlayerInMatchDTO {
  steam_id: string;
  team: number;
  kills: number;
  deaths: number;
  assists: number;
  level: number;

  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;

  gpm: number;
  xpm: number;
  last_hits: number;
  denies: number;
  networth: number;
  heroDamage: number;
  towerDamage: number;
  heroHealing: number;
  abandoned: boolean;
  hero: string;
  partyIndex: number;
}

export class GameResultsEvent {
  constructor(
    public matchId: number,
    public winner: DotaTeam,
    public duration: number,
    public gameMode: Dota_GameMode,
    public type: MatchmakingMode,
    public timestamp: number,
    public server: string,
    public players: PlayerInMatchDTO[],
    public externalMatchId?: number,
  ) {}
}
