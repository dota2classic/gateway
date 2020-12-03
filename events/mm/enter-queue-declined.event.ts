import { PlayerId } from "../../shared-types/player-id";
import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class EnterQueueDeclinedEvent {
  constructor(
    public readonly partyId: string,
    public readonly players: PlayerId[],
    public readonly bannedPlayers: PlayerId[],
    public readonly mode: MatchmakingMode,
  ) {}
}
