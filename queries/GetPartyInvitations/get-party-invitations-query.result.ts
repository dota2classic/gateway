import { PartyInviteCreatedEvent } from "../../events/party/party-invite-created.event";

export class GetPartyInvitationsQueryResult {
  constructor(
    public readonly steamId: string,
    public readonly invitations: PartyInviteCreatedEvent[],
  ) {}
}
