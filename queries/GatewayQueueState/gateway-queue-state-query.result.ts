import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { PartyId } from "../../shared-types/party-id";
import { PlayerId } from "../../shared-types/player-id";

export class GatewayQueueStateQuery_Player {
  constructor(public readonly id: PlayerId) {}
}
export class GatewayQueueStateQuery_QueueEntry {
  constructor(
    public readonly partyID: PartyId,
    public readonly players: GatewayQueueStateQuery_Player[],
  ) {}
}
export class GatewayQueueStateQueryResult {
  constructor(
    public readonly mode: MatchmakingMode,
    public readonly entries: GatewayQueueStateQuery_QueueEntry[],
  ) {}
}
