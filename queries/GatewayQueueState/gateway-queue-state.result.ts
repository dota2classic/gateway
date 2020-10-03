import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class GatewayQueueStateResult {
  constructor(public readonly mode: MatchmakingMode) {}
}
