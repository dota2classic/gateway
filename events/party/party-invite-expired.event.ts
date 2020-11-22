import {PlayerId} from "../../shared-types/player-id";

export class PartyInviteExpiredEvent {
  constructor(
    public readonly id: string,
    public readonly invited: PlayerId,
    public readonly partyId: string,
    public readonly inviter: PlayerId,
  ) {}
}
