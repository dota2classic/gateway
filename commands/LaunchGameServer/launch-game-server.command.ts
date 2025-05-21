import { MatchmakingMode } from '../../shared-types/matchmaking-mode';
import { Dota2Version } from '../../shared-types/dota2version';
import { Dota_GameMode } from '../../shared-types/dota-game-mode';
import { DotaTeam } from '../../shared-types/dota-team';
import { Dota_Map } from '../../shared-types/dota-map';

export class LaunchGameServerCommand {
  constructor(
    public matchId: number,
    public readonly lobbyType: number,
    public readonly gameMode: number,
    public readonly roomId: string,
    public readonly map: Dota_Map,
    public readonly players: FullMatchPlayer[],
  ) {}
}

export class FullMatchPlayer {
  constructor(
    public readonly steamId: string,
    public readonly name: string,
    public readonly subscriber: boolean,
    public readonly muted: boolean,
    public readonly partyId: string,
    public readonly team: DotaTeam,
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
