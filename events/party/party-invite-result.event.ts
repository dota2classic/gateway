import { PlayerId } from "../../shared-types/player-id";

export class PartyInviteResultEvent {
  constructor(
    public readonly id: string,
    public readonly invited: PlayerId,
    public readonly accept: boolean,
  ) {}
}
