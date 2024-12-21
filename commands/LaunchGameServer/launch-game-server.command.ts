import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { Dota2Version } from "../../shared-types/dota2version";
import { Dota_GameMode } from "../../shared-types/dota-game-mode";
import { PlayerId } from "../../shared-types/player-id";
import { DotaTeam } from "../../shared-types/dota-team";
import { Dota_Map } from "../../shared-types/dota-map";

export class LaunchGameServerCommand {
  constructor(
    public readonly url: string,
    public readonly matchId: number,
    public readonly info: GSMatchInfo,
  ) {}
}

export class FullMatchPlayer {
  constructor(
    public readonly playerId: PlayerId,
    public readonly team: DotaTeam,
    public readonly name: string,
    public readonly partyId: string,
  ) {}
}
export class GSMatchInfo {
  constructor(
    public readonly mode: MatchmakingMode,
    public readonly map: Dota_Map,
    public readonly gameMode: Dota_GameMode,
    public readonly roomId: string,
    public readonly players: FullMatchPlayer[],
    public readonly version: Dota2Version,
    public readonly averageMMR: number,
  ) {}
}
