import { MatchmakingMode } from '../shared-types/matchmaking-mode';

export class QueueCreatedEvent {
  public constructor(public readonly mode: MatchmakingMode) {}
}
