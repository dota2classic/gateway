import { MatchInfo } from "../events/room-ready.event";

export class MatchCancelledEvent {
  constructor(
    public readonly matchId: number,
    public readonly info: MatchInfo,
  ) {}
}
