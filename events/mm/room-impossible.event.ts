import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { PartyId } from "../../shared-types/party-id";

export class RoomImpossibleEvent {
  constructor(
    public readonly mode: MatchmakingMode,
    public readonly parties: PartyId[],
  ) {}
}
