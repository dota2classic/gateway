export class MessageCreatedEvent {
  constructor(
    public readonly threadId: string,
    public readonly messageId: string,
    public readonly authorId: string,
    public readonly createdAt: Date,
    public readonly content: string,
  ) {}
}
