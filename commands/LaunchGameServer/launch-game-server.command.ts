import { MatchmakingMode } from '../../shared-types/matchmaking-mode';
import { Dota2Version } from '../../shared-types/dota2version';
import { PlayerId } from '../../shared-types/player-id';
import { DotaTeam } from '../../shared-types/dota-team';

export class LaunchGameServerCommand {
  constructor(public readonly url: string,
              public readonly matchId: number,
              public readonly info: GSMatchInfo
  ) {
  }
}

export class GSMatchInfo {
  constructor(
    public readonly mode: MatchmakingMode,
    public readonly roomId: string,
    public readonly players: MatchPlayer[],
    public readonly version: Dota2Version,
  ) {}
}

export class MatchPlayer{
  constructor(
    public readonly playerId: PlayerId,
    public readonly name: string,
    public readonly team: DotaTeam
  ) {
  }
}
