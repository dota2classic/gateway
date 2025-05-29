export class PlayerRuleBrokenEvent {
  constructor(
    public readonly steamId: string,
    public readonly executorSteamId: string,
    public readonly ruleId: number,
    public readonly overridePunishmentId?: number,
    public readonly reportId?: string
  ) {
  }
}
