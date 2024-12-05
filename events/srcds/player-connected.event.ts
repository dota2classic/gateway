import { PlayerId } from '../../shared-types/player-id';

export class PlayerConnectedEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly matchId: number,
    public readonly serverUrl: string,
  ) {}
}
