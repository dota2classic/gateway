import { PlayerId } from "../../shared-types/player-id";

export class PartyLeaveRequestedEvent {
  constructor(public readonly playerId: PlayerId) {}
}
