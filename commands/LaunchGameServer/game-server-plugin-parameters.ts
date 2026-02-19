export class GameServerPluginParameters {
  constructor(
    public readonly noRunes: boolean,
    public readonly midTowerToWin: boolean,
    public readonly killsToWin: number,
    public readonly enableBanStage: boolean,
    public readonly fillBots: boolean,
    public readonly enableCheats: boolean,
  ) {}
}
