export enum MatchmakingMode {
  RANKED = 0,
  UNRANKED = 1,
  SOLOMID = 2,
  DIRETIDE = 3,
  GREEVILING = 4,
  ABILITY_DRAFT = 5,
  TOURNAMENT = 6,
  BOTS = 7,
  HIGHROOM = 8,
}

export const MatchmakingModes = [
  MatchmakingMode.SOLOMID,
  MatchmakingMode.RANKED,
  MatchmakingMode.UNRANKED,
  MatchmakingMode.DIRETIDE,
  MatchmakingMode.ABILITY_DRAFT,
  MatchmakingMode.GREEVILING,
  MatchmakingMode.BOTS,
  MatchmakingMode.HIGHROOM,
];

export const RoomSizes: { [key in MatchmakingMode]: number } = {
  [MatchmakingMode.SOLOMID]: 2,
  [MatchmakingMode.RANKED]: 10,
  [MatchmakingMode.UNRANKED]: 10,
  [MatchmakingMode.DIRETIDE]: 10,
  [MatchmakingMode.GREEVILING]: 10,
  [MatchmakingMode.TOURNAMENT]: 10,
  [MatchmakingMode.ABILITY_DRAFT]: 10,
  [MatchmakingMode.BOTS]: 10,
  [MatchmakingMode.HIGHROOM]: 10,
};
