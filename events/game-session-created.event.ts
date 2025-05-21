import { MatchSummary } from '../shared-types/match-summary';

export class GameSessionCreatedEvent {
  constructor(
    public readonly url: string,
    public readonly matchId: number,
    public readonly info: MatchSummary,
  ) {}
}
