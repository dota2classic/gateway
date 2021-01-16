import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class GetQueueStateQuery {
  constructor(public readonly mode: MatchmakingMode) {}
}
