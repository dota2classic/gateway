import { MatchmakingMode } from '../../shared-types/matchmaking-mode';
import { PlayerId } from '../../shared-types/player-id';

export class TournamentGameReadyEvent {
  constructor(
    public readonly tournamentId: number,
    public readonly tourMatchId: number,
    public readonly mode: MatchmakingMode,
    public readonly radiant: PlayerId[],
    public readonly dire: PlayerId[],
  ) {
  }
}
