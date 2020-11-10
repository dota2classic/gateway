import {PartyId} from "../shared-types/party-id";
import {PlayerId} from "../shared-types/player-id";

export class PartyInviteCreatedEvent {
  constructor(
    public id: string,
    public readonly partyId: PartyId,
    public readonly invited: PlayerId,
  ) {}
}
