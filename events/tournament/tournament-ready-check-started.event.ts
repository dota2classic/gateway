export class TournamentReadyCheckStartedEvent {
  constructor(
    public readonly tournamentId: number,
    public readonly steamId: string,
  ) {}
}
