import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { ReadyCheckEntry } from "../../events/room-ready-check-complete.event";

export class GetUserRoomQueryResultRoomInfo {
  constructor(
    public readonly steamId: string,
    public readonly roomId: string,
    public readonly mode: MatchmakingMode,
    public readonly iAccepted: boolean,
    public readonly entries: ReadyCheckEntry[],
  ) {}
}

export class GetUserRoomQueryResult {
  constructor(public readonly info?: GetUserRoomQueryResultRoomInfo) {}
}
