export enum Dota_Barrack {
  TOP_MELEE,
  TOP_RANGED,
  MIDDLE_MELEE,
  MIDDLE_RANGED,
  BOTTOM_MELEE,
  BOTTOM_RANGED
}

export const getBarrackState = (
  barrackStatus: number,
  barrack: Dota_Barrack,
): boolean => {
  return (barrackStatus & (1 << barrack)) !== 0;
};
