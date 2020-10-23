import {PlayerId} from "../../shared-types/player-id";

export class GetUserRoomQuery {
  constructor(public readonly playerId: PlayerId) {}
}
