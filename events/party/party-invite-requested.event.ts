import { PlayerId } from "../../shared-types/player-id";

export class PartyInviteRequestedEvent {
  constructor(
    public readonly requestedBy: PlayerId,
    public readonly receiver: PlayerId,
  ) {}
}
