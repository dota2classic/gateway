export class PlayerIpTagEvent {
  constructor(
    public readonly matchId: number,
    public readonly steamId: string,
    public readonly ip: string,
  ) {}
}
