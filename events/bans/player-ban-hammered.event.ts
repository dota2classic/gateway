import { PlayerId } from "../../shared-types/player-id";
import { Timestamp } from "../../shared-types/dto-types";
import { BanReason } from "../../shared-types/ban";

// admin ban
export class PlayerBanHammeredEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly endTime: Timestamp,
    public readonly reason: BanReason,
  ) {}
}
