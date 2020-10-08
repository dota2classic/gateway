import { PlayerId } from "../shared-types/player-id";
import { ReadyState } from "./ready-state-received.event";

export class ReadyStateUpdatedEvent {
  constructor(public readonly playerID: PlayerId, public readonly roomID: string, public readonly state: ReadyState) {
  }
}