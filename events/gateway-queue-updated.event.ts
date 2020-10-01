import { MatchmakingMode } from "../shared-types/matchmaking-mode";
import { PartyId } from "../shared-types/party-id";
import { PlayerId } from "../shared-types/player-id";

export class GatewayQueueEntry {
  constructor(public readonly partyID: PartyId, players: PlayerId[]) {}
}
export class GatewayQueueUpdatedEvent {
  constructor(
    public readonly mode: MatchmakingMode,
    public readonly entries: GatewayQueueEntry[],
  ) {}
}
