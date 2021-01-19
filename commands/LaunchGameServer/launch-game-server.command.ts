import { MatchInfo } from '../../events/room-ready.event';

export class LaunchGameServerCommand {
  constructor(public readonly url: string,
              public readonly matchId: number,
              public readonly info: MatchInfo
  ) {
  }
}
