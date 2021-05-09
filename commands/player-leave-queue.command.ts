import {PlayerId} from "../shared-types/player-id";
import {MatchmakingMode} from "../shared-types/matchmaking-mode";
import {Dota2Version} from "../shared-types/dota2version";

export class PlayerLeaveQueueCommand {
  constructor(
    public readonly playerID: PlayerId,
    public readonly mode: MatchmakingMode,
    public readonly version: Dota2Version,
  ) {}
}
