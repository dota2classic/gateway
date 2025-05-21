import { LaunchGameServerCommand } from '../commands/LaunchGameServer/launch-game-server.command';

export class SrcdsServerStartedEvent {
  constructor(
    public readonly server: string,
    public readonly info: LaunchGameServerCommand,
  ) {}
}
