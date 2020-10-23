import {PlayerId} from "../../shared-types/player-id";

export class GetUserQueueQuery {
  constructor(public readonly player: PlayerId) {
  }
}