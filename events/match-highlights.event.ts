import { MatchmakingMode } from "../shared-types/matchmaking-mode";

export enum HighlightType {
  QUICK_MULTIKILL = "QUICK_MULTIKILL",
  MULTIKILL = "MULTIKILL",
  LOW_HP_KILL = "LOW_HP_KILL",
  COMBO_SPELL = "COMBO_SPELL",
}

export class ReplayTick {
  constructor(
    public readonly tick: number,
    public readonly time: number,
  ) {}
}

export class HighlightDTO {
  constructor(
    public start: ReplayTick,
    public finish: ReplayTick,
    public hero: string,
    public heroIndex: number,
    public type: HighlightType,
    public comment: string,
  ) {}
}

export class MatchHighlightsEvent {
  constructor(
    public matchId: number,
    public lobbyType: MatchmakingMode,
    public highlights: HighlightDTO[],
  ) {}
}
