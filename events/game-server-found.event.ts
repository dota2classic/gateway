import { MatchInfo } from '../events/room-ready.event';

export class GameServerFoundEvent {
  constructor(
    public readonly url: string,
    public readonly info: MatchInfo
  ) {}
}
