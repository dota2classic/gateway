import { PlayerId } from '../../shared-types/player-id';
import { Dota2Version } from '../../shared-types/dota2version';
import { BanReason } from '../../shared-types/ban';

export class BanStatus {
  static NOT_BANNED: BanStatus = new BanStatus(
    false,
    new Date(0).toISOString(),
    BanReason.INFINITE_BAN,
  );

  static PERMA_BAN: BanStatus = new BanStatus(
    true,
    new Date(2048, 6).toISOString(),
    BanReason.INFINITE_BAN,
  );
  constructor(
    public readonly isBanned: boolean,
    public readonly bannedUntil: string,
    public readonly status: BanReason,
  ) {}
}
export class PlayerOverviewSummary {
  constructor(
    public readonly rankedGamesPlayed: number,
    public readonly totalWinrate: number,
    public readonly rank: number,
    public readonly bestHeroes: string[],
    public readonly newbieGamesLeft: number,
  ) {}
}
export class GetPlayerInfoQueryResult {
  constructor(
    public readonly playerId: PlayerId,
    public readonly version: Dota2Version,
    public readonly mmr: number,
    public readonly recentWinrate: number,
    public readonly recentKDA: number,
    public readonly gamesPlayed: number,
    public readonly banStatus: BanStatus,
  ) {}
}
