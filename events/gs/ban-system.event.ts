import { PlayerId } from "../../shared-types/player-id";
import { BanReason } from "../../shared-types/ban";

export class BanSystemEntry {
  constructor(
    public readonly reason: BanReason,
    public readonly time: number,
  ) {}
}
export class BanSystemEvent {
  constructor(
    public readonly id: PlayerId,
    public readonly entries: BanSystemEntry[],
    public readonly resultBanDate: number,
    public readonly banDuration: number,
  ) {}
}
