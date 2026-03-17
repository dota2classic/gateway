import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { Dota_GameMode } from "../../shared-types/dota-game-mode";

export class GameSessionData {
  constructor(
    public readonly matchId: number,
    public readonly lobbyType: MatchmakingMode,
    public readonly gameMode: Dota_GameMode,
    public readonly compromised: boolean
  ) {}
}
export class GameSessionUpdateEvent {
  constructor(
    public readonly steamId: string,
    public readonly session?: GameSessionData,
  ) {}
}
