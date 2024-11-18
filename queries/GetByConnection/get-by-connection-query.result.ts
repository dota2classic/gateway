import { PlayerId } from "../../shared-types/player-id";

export class GetByConnectionQueryResult {
  constructor(public readonly id: PlayerId | null) {}
}
