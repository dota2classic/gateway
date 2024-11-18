import { MatchInfo } from "../events/room-ready.event";

export class GameServerNotFoundEvent {
  constructor(public readonly info: MatchInfo, public readonly tries: number) {}
}
