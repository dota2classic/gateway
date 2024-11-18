import {
  ReadyCheckEntry,
  RoomReadyState,
} from "./room-ready-check-complete.event";
import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export class ReadyStateUpdatedEvent {
  constructor(
    public readonly roomID: string,
    public readonly mode: MatchmakingMode,
    public readonly entries: ReadyCheckEntry[],
    public readonly state: RoomReadyState,
  ) {}
}
