import { MatchInfo } from "../events/room-ready.event";
import { GameServerInfo } from "../shared-types/game-server-info";

export class MatchStartedEvent {
  constructor(
    public readonly matchId: number,
    public readonly info: MatchInfo,
    public readonly gsInfo: GameServerInfo,
  ) {}
}
