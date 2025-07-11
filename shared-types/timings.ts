export const PARTY_INVITE_LIFETIME = 30_000;
export const ACCEPT_GAME_TIMEOUT = 60_000;

export const UNRANKED_GAMES_REQUIRED_FOR_RANKED = 1;

export const NOT_LOAD_FIRST_BAN = 1000 * 60 * 10;

export const ADDITIVE_NOT_LOAD_BAN = 1000 * 60 * 60 * 4; // 4 hours

export const MAX_REPORTS_AVAILABLE = 10;
export const FREE_REPORT_PER_GAMES = 2;
export const GAMES_TO_ADD_REPORT = 1;
export const REPORT_STACK_WINDOW = "24 hours";
export const CRITICAL_REPORT_COUNT_TO_BAN = 3;

// export const MATCH_REPORT_TIMEOUT = 1000 * 60 * 60 * 24 * 3; // 24 HOURS
export const MATCH_REPORT_TIMEOUT = 1000 * 60 * 60 * 24 * 2; // 2 days

// 1 min
export const LIGHT_PUNISHMENT = 1000 * 60 * 1;

// 10 min
export const MEDIUM_PUNISHMENT = 1000 * 60 * 10;

export const FIVE_MINUTES = 1000 * 60 * 10;

// 4 hrs
export const SEMI_HARD = 1000 * 60 * 60 * 4;

// 12 hrs
export const HARD_PUNISHMENT = 1000 * 60 * 60 * 12;

// 40 hrs
export const VERY_HARD_PUNISHMENT = 1000 * 60 * 60 * 40;
// if new crime is less than 4 hours after previous, we multiply times
export const MAX_TIME_FOR_PUNISHMENT_MULTIPLY = 1000 * 60 * 4;

// 6 hours
export const CRIMES_INTERVAL_FOR_MULTIPLY = 1000 * 60 * 60 * 6;



//
export const DAY = 1000 * 60 * 60 * 24 * 1;
export const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14;
