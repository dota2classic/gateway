import { PlayerId } from "../../shared-types/player-id";
import { PartyInviteCreatedEvent } from "../../events/party/party-invite-created.event";

export class GetPartyInvitationsQueryResult {
  constructor(
    public readonly playerId: PlayerId,
    public readonly invitations: PartyInviteCreatedEvent[],
  ) {}
}
