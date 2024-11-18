import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { PlayerId } from "../../shared-types/player-id";
import { BracketEntryType } from "../../shared-types/tournament";
import { Dota2Version } from "../../shared-types/dota2version";

export class TournamentGameReadyEvent {
  constructor(
    public readonly tournamentId: number,
    public readonly tourMatchId: number,
    public readonly mode: MatchmakingMode,
    public readonly version: Dota2Version,
    public readonly radiant: PlayerId[],
    public readonly dire: PlayerId[],
  ) {}
}
