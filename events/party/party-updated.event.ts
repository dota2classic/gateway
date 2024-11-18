import { PartyId } from "../../shared-types/party-id";
import { PlayerId } from "../../shared-types/player-id";

export class PartyUpdatedEvent {
  constructor(
    public readonly partyId: PartyId,
    public readonly leaderId: PlayerId,
    public readonly players: PlayerId[],
  ) {}
}
