import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export class RoomReadyEvent {
  constructor(
    public readonly roomId: string,
    public readonly mode: MatchmakingMode
  ) {}
}
