import { PlayerId } from "../../shared-types/player-id";

export class UserCreatedEvent {
  constructor(public readonly playerId: PlayerId) {}
}
