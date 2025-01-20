import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { PartyId } from "../../shared-types/party-id";

interface GatewayQueueStateQuery_QueueEntry {
  readonly partyID: PartyId;
  readonly players: string[];
  readonly modes: MatchmakingMode[];
}
export class GetQueueStateQueryResult {
  constructor(public readonly entries: GatewayQueueStateQuery_QueueEntry[]) {}
}
