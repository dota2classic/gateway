export class PartyInviteAcceptedEvent {
  constructor(
    public readonly inviteId: string,
    public readonly accept: boolean,
  ) {}
}
