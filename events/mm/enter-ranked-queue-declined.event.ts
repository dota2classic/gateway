import { PlayerId } from "../../shared-types/player-id";
import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class EnterRankedQueueDeclinedEvent {
  constructor(
    public readonly partyId: string,
    public readonly players: PlayerId[],
    public readonly newPlayers: PlayerId[],
    public readonly mode: MatchmakingMode,
  ) {}
}
