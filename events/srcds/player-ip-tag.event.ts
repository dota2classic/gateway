export class PlayerIpTagEvent {
  constructor(
    public readonly steamId: string,
    public readonly ip: string,
  ) {}
}
