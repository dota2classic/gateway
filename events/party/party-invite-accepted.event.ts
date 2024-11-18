import { PlayerId } from "../../shared-types/player-id";

export class PartyInviteAcceptedEvent {
  constructor(
    public readonly inviteId: string,
    public readonly player: PlayerId,
    public readonly accept: boolean,
  ) {}
}
