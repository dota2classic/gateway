import { ReactionEntry } from '../../forum/dto/message.dto';

export class MessageUpdatedEvent {
  constructor(
    public readonly threadId: string,
    public readonly id: string,
    public readonly author: string,
    public readonly createdAt: string,
    public readonly content: string,
    public readonly deleted: boolean,
    public readonly reactions: ReactionEntry[],
  ) {}
}
