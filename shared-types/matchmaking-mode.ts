
export enum MatchmakingMode {
  RANKED = 0,
  UNRANKED = 1,
  SOLOMID = 2,
  DIRETIDE = 3,
  GREEVILING = 4,
  ABILITY_DRAFT = 5,
  TOURNAMENT = 6,
}

export const MatchmakingModes = [
  MatchmakingMode.SOLOMID,
  MatchmakingMode.RANKED,
  MatchmakingMode.UNRANKED,
]


export const RoomSizes: { [key in MatchmakingMode]: number } = {
  [MatchmakingMode.SOLOMID]: 2,
  [MatchmakingMode.RANKED]: 10,
  [MatchmakingMode.UNRANKED]: 10,
  [MatchmakingMode.DIRETIDE]: 10,
  [MatchmakingMode.GREEVILING]: 10,
  [MatchmakingMode.TOURNAMENT]: 10,
  [MatchmakingMode.ABILITY_DRAFT]: 10,
};