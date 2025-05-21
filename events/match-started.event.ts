import { GameServerInfo } from '../shared-types/game-server-info';
import { MatchSummary } from '../shared-types/match-summary';

export class MatchStartedEvent {
  constructor(
    public readonly matchId: number,
    public readonly info: MatchSummary,
    public readonly gsInfo: GameServerInfo,
  ) {}
}
