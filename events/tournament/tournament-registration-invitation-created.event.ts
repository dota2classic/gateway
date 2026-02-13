export class TournamentRegistrationInvitationCreatedEvent {
  constructor(
    public readonly tournamentId: number,
    public readonly inviterSteamId: string,
    public readonly steamId: string,
    public readonly registrationId: number,
    public readonly invitationId: string,
  ) {}
}
