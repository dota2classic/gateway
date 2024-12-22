import { MatchmakingMode } from "../shared-types/matchmaking-mode";
import { Dota2Version } from "../shared-types/dota2version";
import { MatchPlayer } from "./room-ready.event";
import { Dota_GameMode } from "../shared-types/dota-game-mode";

export class LobbyReadyEvent {
  constructor(
    public readonly roomId: string,
    public readonly mode: MatchmakingMode,
    public readonly gameMode: Dota_GameMode,
    public readonly players: MatchPlayer[],
    public readonly version: Dota2Version,
  ) {}
}
