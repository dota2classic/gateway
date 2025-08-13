import { MatchmakingMode } from "./matchmaking-mode";

/**
 * EDUCATION = need to finish education, either win or lose
 * SIMPLE_MODES = 1+ games, 0 wins
 * HUMAN_GAMES = 1+ wins
 */
export enum MatchAccessLevel {
  EDUCATION,
  SIMPLE_MODES,
  HUMAN_GAMES,
}

export const getRequiredAccessLevel = (
  mode: MatchmakingMode,
): MatchAccessLevel => {
  switch (mode) {
    case MatchmakingMode.RANKED:
      return MatchAccessLevel.HUMAN_GAMES;
    case MatchmakingMode.UNRANKED:
      return MatchAccessLevel.HUMAN_GAMES;
    case MatchmakingMode.SOLOMID:
      return MatchAccessLevel.SIMPLE_MODES;
    case MatchmakingMode.DIRETIDE:
      return MatchAccessLevel.SIMPLE_MODES;
    case MatchmakingMode.GREEVILING:
      return MatchAccessLevel.SIMPLE_MODES;
    case MatchmakingMode.ABILITY_DRAFT:
      return MatchAccessLevel.SIMPLE_MODES;
    case MatchmakingMode.TOURNAMENT:
      return MatchAccessLevel.HUMAN_GAMES;
    case MatchmakingMode.BOTS:
      return MatchAccessLevel.EDUCATION;
    case MatchmakingMode.HIGHROOM:
      return MatchAccessLevel.HUMAN_GAMES;
    case MatchmakingMode.TOURNAMENT_SOLOMID:
      return MatchAccessLevel.SIMPLE_MODES;
    case MatchmakingMode.CAPTAINS_MODE:
      return MatchAccessLevel.HUMAN_GAMES;
    case MatchmakingMode.LOBBY:
      return MatchAccessLevel.EDUCATION;
    case MatchmakingMode.BOTS_2X2:
      return MatchAccessLevel.SIMPLE_MODES;
    case MatchmakingMode.TURBO:
      return MatchAccessLevel.SIMPLE_MODES;
  }
};

export const canQueueMode = (
  level: MatchAccessLevel,
  mode: MatchmakingMode,
) => {
  return level >= getRequiredAccessLevel(mode);
};
