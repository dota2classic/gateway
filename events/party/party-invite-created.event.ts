import { PartyId } from "../../shared-types/party-id";

export class PartyInviteCreatedEvent {
  constructor(
    public readonly id: string,
    public readonly partyId: PartyId,
    public readonly leaderId: string,
    public readonly invited: string,
  ) {}
}
