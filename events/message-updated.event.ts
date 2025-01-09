

export class EmoticonDto {
  id: number;
  code: string;

  bucket: string;
  key: string;
}

export class ReactionEntry {
  emoticon: EmoticonDto;
  reacted: string[]
}

export class MessageUpdatedEvent {
  constructor(
    public readonly threadId: string,
    public readonly id: string,
    public readonly author: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly content: string,
    public readonly deleted: boolean,
    public readonly edited: boolean,
    public readonly repliedMessage: MessageUpdatedEvent | undefined,
    public readonly reactions: ReactionEntry[],
  ) {}
}
