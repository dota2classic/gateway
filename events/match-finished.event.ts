import { MatchSummary } from '../shared-types/match-summary';

export class MatchFinishedEvent {
  constructor(
    public readonly matchId: number,
    public readonly info: MatchSummary,
  ) {}
}
