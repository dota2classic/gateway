import { PlayerId } from "../../shared-types/player-id";

export class GetPartyInvitationsQuery {
  constructor(public readonly playerId: PlayerId) {}
}
