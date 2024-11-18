import { MatchInfo } from "./room-ready.event";

export class MatchFinishedEvent {
  constructor(
    public readonly matchId: number,
    public readonly info: MatchInfo,
  ) {}
}
