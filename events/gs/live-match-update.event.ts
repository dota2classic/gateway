import { Dota_GameMode } from "../../shared-types/dota-game-mode";
import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

class PlayerInfo {
  hero: string;
  team: number;
  steam_id: string;
  level: number;

  bot: boolean;

  pos_x: number;
  pos_y: number;
  angle: number;

  mana: number;
  max_mana: number;
  health: number;
  max_health: number;

  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;

  kills: number;
  deaths: number;
  assists: number;

  respawn_time: number;
}

export class LiveMatchUpdateEvent {
  matchId: number;
  matchmaking_mode: MatchmakingMode;
  game_mode: Dota_GameMode;
  duration: number;
  server: string;
  timestamp: number;
  heroes: PlayerInfo[];
}
