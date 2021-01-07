import { PlayerId } from '../../shared-types/player-id';
import { Dota2Version } from '../../shared-types/dota2version';
import { BanReason } from '../../shared-types/ban';

export class BanStatus {
  static NOT_BANNED: BanStatus = new BanStatus(
    false,
    0,
    BanReason.INFINITE_BAN,
  );
  constructor(
    public readonly isBanned: boolean,
    public readonly bannedUntil: number,
    public readonly status: BanReason,
  ) {}
}
export class PlayerOverviewSummary {
  constructor(
    public readonly rankedGamesPlayed: number,
    public readonly totalWinrate: number,
    public readonly rank: number,
    public readonly bestHeroes: string[],
    public readonly newbieGamesLeft: number
  ) {}
}
export class GetPlayerInfoQueryResult {
  constructor(
    public readonly playerId: PlayerId,
    public readonly version: Dota2Version,
    public readonly mmr: number,
    public readonly recentWinrate: number,
    public readonly summary: PlayerOverviewSummary,
    public readonly banStatus: BanStatus,
  ) {}
}
