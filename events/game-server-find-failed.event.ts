import { Dota2Version } from "../shared-types/dota2version";
import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export class GameServerFindFailedEvent {
  constructor(
    public readonly roomId: string,
    public readonly version: Dota2Version,
    public readonly mode: MatchmakingMode,
  ) {}
}
