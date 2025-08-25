export enum Dota_Tower {
  TOP_TIER_1,
  TOP_TIER_2,
  TOP_TIER_3,
  MIDDLE_TIER_1,
  MIDDLE_TIER_2,
  MIDDLE_TIER_3,
  BOTTOM_TIER_1,
  BOTTOM_TIER_2,
  BOTTOM_TIER_3,
  ANCIENT_TOP,
  ANCIENT_BOTTOM,
}

export const getTowerState = (
  towerStatus: number,
  tower: Dota_Tower,
): boolean => {
  return (towerStatus & (1 << tower)) !== 0;
};
