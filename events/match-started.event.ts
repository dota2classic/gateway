import { MatchInfo } from '../events/room-ready.event';

export class MatchStartedEvent {
  constructor(
    public readonly matchId: number,
    public readonly info: MatchInfo,
  ) {}
}
