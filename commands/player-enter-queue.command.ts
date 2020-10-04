import { PlayerId } from "../shared-types/player-id";

export class PlayerEnterQueueCommand {
  constructor(public readonly playerID: PlayerId) {}
}
