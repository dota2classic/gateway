import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class GatewayQueueStateQuery {
  constructor(public readonly mode: MatchmakingMode) {}
}
