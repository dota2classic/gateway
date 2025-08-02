export class MarketItemDto {
  constructor(
    public readonly marketHashName: string,
    public readonly quality: string,
    public readonly price: number,
    public readonly icon: string,
    public readonly type: string,
    public readonly rarity: string,
  ) {}
}

export class ItemDroppedEvent {
  constructor(
    public readonly matchId: number,
    public readonly steamId: string,
    public readonly assetId: string,
    public readonly item: MarketItemDto,
  ) {}
}
