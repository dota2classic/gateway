import {
  ReadyCheckEntry,
  RoomReadyState,
} from "./room-ready-check-complete.event";
import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export class ReadyCheckStartedEvent {
  constructor(
    public readonly roomId: string,
    public readonly mode: MatchmakingMode,
    public readonly entries: ReadyCheckEntry[],
    public readonly state: RoomReadyState,
  ) {}
}
