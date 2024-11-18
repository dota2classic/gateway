import { GSMatchInfo } from "../../commands/LaunchGameServer/launch-game-server.command";

export class ServerSessionSyncEvent {
  constructor(
    public readonly url: string,
    public readonly matchId: number,
    public readonly info: GSMatchInfo,
  ) {}
}
