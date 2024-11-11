import {PlayerId} from "../../shared-types/player-id";
import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class PlayerDeclinedGameEvent {
  constructor(public readonly id: PlayerId, public readonly mode: MatchmakingMode) {
  }
}
