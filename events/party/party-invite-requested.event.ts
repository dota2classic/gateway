export class PartyInviteRequestedEvent {
  constructor(
    public readonly requestedBy: string,
    public readonly receiver: string,
  ) {}
}
