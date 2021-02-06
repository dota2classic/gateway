import { MatchmakingMode } from '../../shared-types/matchmaking-mode';
import { PlayerId } from '../../shared-types/player-id';
import { BracketEntryType } from '../../shared-types/tournament';

export class TournamentGameReadyEvent {
  constructor(
    public readonly tournamentId: number,
    public readonly tourMatchId: number,
    public readonly mode: MatchmakingMode,
    public readonly radiant: PlayerId[],
    public readonly dire: PlayerId[],
    public readonly entryType: BracketEntryType
  ) {
  }
}
