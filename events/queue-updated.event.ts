import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export class QueueUpdatedEvent {
  constructor(
    public readonly modes: { lobby: MatchmakingMode, count: number }[]
  ) {}
}
