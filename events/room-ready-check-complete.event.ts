import {PlayerId} from "../shared-types/player-id";
import {ReadyState} from "./ready-state-received.event";

export class ReadyCheckEntry {
  constructor(public readonly playerId: PlayerId, public readonly readyState: ReadyState) {
  }
}

export class RoomReadyCheckCompleteEvent {
  constructor(public readonly id: string, public readonly entries: ReadyCheckEntry[]) {
  }
}