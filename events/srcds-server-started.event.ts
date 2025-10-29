export class SrcdsServerStartedEvent {
  constructor(
    public readonly matchId: number,
    public readonly server: string,
  ) {}
}
