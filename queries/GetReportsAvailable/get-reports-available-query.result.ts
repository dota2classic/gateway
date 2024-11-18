import { PlayerId } from "../../shared-types/player-id";

export class GetReportsAvailableQueryResult {
  constructor(
    public readonly id: PlayerId,
    public readonly available: number,
  ) {}
}
