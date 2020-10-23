import {PlayerId} from "../shared-types/player-id";

export class RoomNotReadyEvent {
  constructor(public readonly roomId: string, public readonly players: PlayerId[]) {
  }
}