import { PartyId } from "../../shared-types/party-id";
import { PlayerId } from "../../shared-types/player-id";

export class PartyInviteCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly partyId: PartyId,
    public readonly leaderId: PlayerId,
    public readonly invited: PlayerId,
  ) {}
}
