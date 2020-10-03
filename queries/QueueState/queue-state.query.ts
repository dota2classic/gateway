import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class QueueStateQuery {
  constructor(public readonly mode: MatchmakingMode) {}
}
