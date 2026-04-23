import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export enum DeclineReason {
  DECLINED = "DECLINED",
  TIMEOUT = "TIMEOUT",
}

export class PlayerDeclinedGameEvent {
  constructor(
    public readonly steamId: string,
    public readonly mode: MatchmakingMode,
    public readonly reason: DeclineReason = DeclineReason.DECLINED,
  ) {}
}
