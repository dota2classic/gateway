import { PlayerId } from "../shared-types/player-id";

export class MatchFailedEvent {
  constructor(
    public readonly matchId: number,
    public readonly serverUrl: string,
    public readonly failedPlayers: PlayerId[],
  ) {}
}
