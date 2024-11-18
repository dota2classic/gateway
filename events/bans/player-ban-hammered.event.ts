import { PlayerId } from "../../shared-types/player-id";

// admin ban
export class PlayerBanHammeredEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly endTime: number,
  ) {}
}
