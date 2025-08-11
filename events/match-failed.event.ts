export class MatchFailedEvent {
  constructor(
    public readonly matchId: number,
    public readonly serverUrl: string,
    public readonly failedPlayers: string[],
    public readonly goodPlayers: string[],
  ) {}
}
