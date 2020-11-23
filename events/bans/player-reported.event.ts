import { PlayerId } from '../../shared-types/player-id';

export class PlayerReportedEvent {
  constructor(
    public readonly reporter: PlayerId,
    public readonly reported: PlayerId,
    public readonly matchId: number,
  ) {}
}
