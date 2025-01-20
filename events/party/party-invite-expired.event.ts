export class PartyInviteExpiredEvent {
  constructor(
    public readonly id: string,
    public readonly invited: string,
  ) {}
}
