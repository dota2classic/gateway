import {MatchmakingMode} from "../../shared-types/matchmaking-mode";

export class GetUserQueueQueryResult {
  constructor(public readonly mode?: MatchmakingMode) {}
}
