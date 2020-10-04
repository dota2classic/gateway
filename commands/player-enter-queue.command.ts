import { PlayerId } from "../shared-types/player-id";
import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export class PlayerEnterQueueCommand {
  constructor(public readonly playerID: PlayerId, public readonly mode: MatchmakingMode) {}
}
