import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { Dota2Version } from "../../shared-types/dota2version";

export class GetUserQueueQueryResult {
  constructor(
    public readonly mode?: MatchmakingMode,
    public readonly version?: Dota2Version,
  ) {}
}
