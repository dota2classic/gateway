import { PlayerId } from "../../shared-types/player-id";
import { Dota2Version } from "../../shared-types/dota2version";

export class GetPlayerInfoQueryResult {
  constructor(
    public readonly playerId: PlayerId,
    public readonly version: Dota2Version,
    public readonly mmr: number,
    public readonly recentWinrate: number,
  ) {}
}
