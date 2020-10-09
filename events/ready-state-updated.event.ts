import {RoomReadyState} from "./room-ready-check-complete.event";

export class ReadyStateUpdatedEvent {
  constructor(public readonly roomID: string, public readonly state: RoomReadyState) {
  }
}