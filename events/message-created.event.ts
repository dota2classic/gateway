export class MessageCreatedEvent {
  constructor(
    public readonly threadId: string,
    public readonly externalThreadId: string,
    public readonly messageId: string,
    public readonly authorId: string,
    public readonly createdAt: string,
    public readonly content: string,
  ) {}
}
