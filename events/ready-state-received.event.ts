export enum ReadyState {
  READY,
  DECLINE,
  TIMEOUT,
  PENDING,
}

export class ReadyStateReceivedEvent {
  constructor(
    public readonly steamId: string,
    public readonly roomId: string,
    public readonly state: ReadyState,
  ) {}
}
