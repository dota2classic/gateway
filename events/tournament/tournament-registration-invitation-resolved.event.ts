export class TournamentRegistrationInvitationResolvedEvent {
  constructor(
    public readonly inviterSteamId: string,
    public readonly steamId: string,
    public readonly accept: boolean
  ) {}
}
