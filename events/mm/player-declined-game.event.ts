import {PlayerId} from "../../shared-types/player-id";

export class PlayerDeclinedGameEvent {
  constructor(public readonly id: PlayerId) {
  }
}
