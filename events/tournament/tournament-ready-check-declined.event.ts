export class TournamentReadyCheckDeclinedEvent {
  constructor(
    public readonly tournamentId: number,
    public readonly registrationId: number,
    public readonly steamId: string
  ) {
  }
}
