import { MatchmakingMode } from "../shared-types/matchmaking-mode";
import { PlayerId } from "../shared-types/player-id";
import { Dota2Version } from "../shared-types/dota2version";
import { DotaTeam } from "../shared-types/dota-team";

export class MatchPlayer {
  constructor(
    public readonly playerId: PlayerId,
    public readonly team: DotaTeam,
    public readonly partyId: string,
  ) {}
}

export class MatchInfo {
  constructor(
    public readonly mode: MatchmakingMode,
    public readonly roomId: string,
    public readonly players: MatchPlayer[],
    public readonly averageMMR: number,
    public readonly version: Dota2Version,
    public readonly tournamentId?: number,
    public readonly tournamentMatchId?: number,
  ) {}
}

export class RoomReadyEvent {
  constructor(
    public readonly roomId: string,
    public readonly mode: MatchmakingMode,
    public readonly players: MatchPlayer[],
    // public readonly averageMMR: number,
    public readonly version: Dota2Version,
  ) {}
}
