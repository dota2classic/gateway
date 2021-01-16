import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { PartyId } from "../../shared-types/party-id";
import { PlayerId } from "../../shared-types/player-id";

interface GatewayQueueStateQuery_QueueEntry {
  readonly partyID: PartyId;
  readonly players: PlayerId[];
}
export class GetQueueStateQueryResult {
  constructor(
    public readonly mode: MatchmakingMode,
    public readonly entries: GatewayQueueStateQuery_QueueEntry[],
  ) {}
}
