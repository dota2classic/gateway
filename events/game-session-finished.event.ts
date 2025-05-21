import { MatchSummary } from '../shared-types/match-summary';

export class GameSessionFinishedEvent {
  constructor(
    public readonly url: string,
    public readonly matchId: number,
    public readonly info: MatchSummary,
  ) {}
}
