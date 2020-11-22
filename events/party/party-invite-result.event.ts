import {PlayerId} from "../../shared-types/player-id";

export class PartyInviteResultEvent {
  constructor(
    public readonly inviteId: string,
    public readonly invited: PlayerId,
    public readonly accept: boolean,
    public readonly inviter: PlayerId
  ) {}
}
