import { PlayerId } from "../shared-types/player-id";
import { BanStatus } from "../queries/GetPlayerInfo/get-player-info-query.result";

export class MatchmakingBannedEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly banStatus: BanStatus,
  ) {}
}
