import { MatchInfo } from '../../events/room-ready.event';

export class ServerSessionSyncEvent {
  constructor(
    public readonly url: string,
    public readonly matchId: number,
    public readonly info: MatchInfo,
  ) {}
}
