import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { PartyId } from "../../shared-types/party-id";
import { Dota2Version } from "../../shared-types/dota2version";

export class RoomImpossibleEvent {
  constructor(
    public readonly mode: MatchmakingMode,
    public readonly version: Dota2Version,
    public readonly parties: PartyId[],
  ) {}
}
