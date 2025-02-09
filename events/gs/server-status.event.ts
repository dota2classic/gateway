export class ServerStatusEvent {
  constructor(
    public readonly url: string,
    public readonly running: boolean,
  ) {}
}
