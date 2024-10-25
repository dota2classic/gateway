export class MessageUpdatedEvent {
  constructor(
    public readonly threadId: string,
    public readonly messageId: string,
    public readonly content: string,
    public readonly messageIndex: number,
    public readonly deleted: boolean
  ) {}
}
