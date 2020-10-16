import { MatchInfo } from '../events/room-ready.event';

export class GameSessionFinishedEvent {
  constructor(
    public readonly url: string,
    public readonly matchId: number,
    public readonly info: MatchInfo,
  ) {}
}
