import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class PlayerDeclinedGameEvent {
  constructor(
    public readonly steamId: string,
    public readonly mode: MatchmakingMode,
  ) {}
}
