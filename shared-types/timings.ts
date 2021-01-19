export const PARTY_INVITE_LIFETIME = 30_000;
export const ACCEPT_GAME_TIMEOUT = 120_000;

export const UNRANKED_GAMES_REQUIRED_FOR_RANKED = 1;

export const NOT_LOAD_FIRST_BAN = 1000 * 60 * 10;

export const ADDITIVE_NOT_LOAD_BAN = 1000 * 60 * 60 * 4; // 4 hours



// 5 min
export const LIGHT_PUNISHMENT = 1000 * 60 * 5;
// 8 hrs
export const HARD_PUNISHMENT = 1000 * 60 * 60 * 8;

// 40 hrs
export const VERY_HARD_PUNISHMENT = 1000 * 60 * 60 * 40;
// if new crime is less than 4 hours after previous, we multiply times
export const MAX_TIME_FOR_PUNISHMENT_MULTIPLY = 1000 * 60 * 4;


export const calcCumulativePunishment = (totalCrimes: number) => {
  switch (totalCrimes){
    case 0:
      return LIGHT_PUNISHMENT;
    case 1:
      return LIGHT_PUNISHMENT * 3
    case 2:
      return HARD_PUNISHMENT
    case 3:
      return VERY_HARD_PUNISHMENT
    default:
      return VERY_HARD_PUNISHMENT * 100
  }
}



// 24 hours
export const CRIMES_INTERVAL_FOR_MULTIPLY = 1000 * 60 * 60 * 24
