import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class PlayerEnterQueueRequestedEvent {
  constructor(
    public readonly id: string,
    public readonly modes: MatchmakingMode[],
  ) {}
}
