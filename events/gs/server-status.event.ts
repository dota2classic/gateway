import { GSMatchInfo } from "../../commands/LaunchGameServer/launch-game-server.command";

export class ServerStatusEvent {
  constructor(
    public readonly url: string,
    public readonly running: boolean,
    public readonly matchId: number | undefined,
    public readonly session: GSMatchInfo | undefined,
  ) {}
}
