import { GSMatchInfo } from '../commands/LaunchGameServer/launch-game-server.command';

export class SrcdsServerStartedEvent {
  constructor(
    public readonly server: string,
    public readonly matchId: number,
    public readonly info: GSMatchInfo,
  ) {}
}
