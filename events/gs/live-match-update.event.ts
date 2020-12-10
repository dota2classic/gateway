import { MatchmakingMode } from '../../shared-types/matchmaking-mode';

class PlayerInfo {
  hero: string;
  team: number;
  steam_id: string;
  level: number;
  pos_x: number;
  bot: boolean;
  pos_y: number;
  items: string[];
  kills: number;
  deaths: number;
  assists: number;
}

export class LiveMatchUpdateEvent {
  matchId: number;
  type: MatchmakingMode;
  duration: number;
  server: string;
  timestamp: number;
  heroes: PlayerInfo[];
}
