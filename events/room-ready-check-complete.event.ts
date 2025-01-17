import { PlayerId } from "../shared-types/player-id";
import { ReadyState } from "./ready-state-received.event";
import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export class ReadyCheckEntry {
  constructor(
    public readonly steamId: string,
    public readonly readyState: ReadyState,
  ) {}
}

export class RoomReadyState {
  total: number;
  accepted: number;
}

export class RoomReadyCheckCompleteEvent {
  constructor(
    public readonly id: string,
    public readonly mode: MatchmakingMode,
    public readonly state: RoomReadyState,
  ) {}
}
