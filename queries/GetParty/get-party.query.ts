import { PlayerId } from "../../shared-types/player-id";

export class GetPartyQuery {
  constructor(public readonly id: PlayerId) {}
}
