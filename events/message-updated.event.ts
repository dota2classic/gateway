

export class EmoticonDto {
  id: number;
  code: string;

  bucket: string;
  key: string;
}

export class ReactionEntry {
  emoticon: EmoticonDto;
  count: number;
}

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
