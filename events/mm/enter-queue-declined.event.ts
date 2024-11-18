import { PlayerId } from "../../shared-types/player-id";
import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { Dota2Version } from "../../shared-types/dota2version";

export class EnterQueueDeclinedEvent {
  constructor(
    public readonly partyId: string,
    public readonly players: PlayerId[],
    public readonly bannedPlayers: PlayerId[],
    public readonly mode: MatchmakingMode,
    public readonly version: Dota2Version,
  ) {}
}
