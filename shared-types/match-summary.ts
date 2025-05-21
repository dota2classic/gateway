import { MatchmakingMode } from './matchmaking-mode';
import { Dota_Map } from './dota-map';
import { Dota_GameMode } from './dota-game-mode';
import { DotaTeam } from './dota-team';

export class MatchSummary {
  constructor(
    public readonly matchId: number,
    public readonly roomId: string,
    public readonly lobbyType: MatchmakingMode,
    public readonly gameMode: Dota_GameMode,
    public readonly map: Dota_Map,
    public readonly players: PlayerInMatchSummary[],
  ) {}
}

export class PlayerInMatchSummary {
  constructor(public readonly steamId: string, public readonly partyId: string, public readonly team: DotaTeam) {}
}
