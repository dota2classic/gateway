export class ItemDroppedEvent {
  constructor(
    public readonly matchId: number,
    public readonly steamId: string,
    public readonly assetId: string,
    public readonly marketHashName: string
  ) {
  }
}
