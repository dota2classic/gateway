import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export class GatewayQueueCreatedEvent {
  constructor(public readonly mode: MatchmakingMode) {
  }
}