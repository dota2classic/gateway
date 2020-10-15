import { MatchmakingMode } from "../shared-types/matchmaking-mode";
import { PlayerId } from "../shared-types/player-id";

export class RoomReadyEvent {
  constructor(
    public readonly roomId: string,
    public readonly mode: MatchmakingMode,
    public readonly radiant: PlayerId[],
    public readonly dire: PlayerId[],
    public readonly averageMMR: number,
  ) {}
}
