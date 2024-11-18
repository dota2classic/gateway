import { PlayerId } from "../../shared-types/player-id";

export class GetPartyQueryResult {
  constructor(
    public readonly id: string,
    public readonly leader: PlayerId,
    public readonly players: PlayerId[],
  ) {}
}
