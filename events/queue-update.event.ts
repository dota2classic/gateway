import { MatchmakingMode } from "../shared-types/matchmaking-mode";


export class QueueUpdateEvent {
  constructor(
    public readonly mode: MatchmakingMode
  ) {}
}
