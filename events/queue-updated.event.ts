import { MatchmakingMode } from "../shared-types/matchmaking-mode";


export class QueueUpdatedEvent {
  constructor(
    public readonly mode: MatchmakingMode
  ) {}
}