import { MatchInfo } from "../events/room-ready.event";

export class GameServerStartedEvent {
  constructor(
    public readonly matchId: number,
    public readonly info: MatchInfo,
    public readonly url: string,
  ) {}
}

export class GameServerNotStartedEvent {
  constructor(
    public readonly matchId: number,
    public readonly info: MatchInfo,
    public readonly url: string,
  ) {}
}
