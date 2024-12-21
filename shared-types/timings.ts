export const PARTY_INVITE_LIFETIME = 30_000;
export const ACCEPT_GAME_TIMEOUT = 60_000;

export const UNRANKED_GAMES_REQUIRED_FOR_RANKED = 1;

export const NOT_LOAD_FIRST_BAN = 1000 * 60 * 10;

export const ADDITIVE_NOT_LOAD_BAN = 1000 * 60 * 60 * 4; // 4 hours

export const MAX_REPORTS_AVAILABLE = 10;
export const FREE_REPORT_PER_GAMES = 3;
export const GAMES_TO_ADD_REPORT = 5;
export const REPORT_STACK_WINDOW = "24 hours";
export const CRITICAL_REPORT_COUNT_TO_BAN = 3;

export const MATCH_REPORT_TIMEOUT = 1000 * 60 * 60 * 24 * 3; // 24 HOURS

// 1 min
export const LIGHT_PUNISHMENT = 1000 * 60 * 1;

// 10 min
export const MEDIUM_PUNISHMENT = 1000 * 60 * 10;

// 12 hrs
export const HARD_PUNISHMENT = 1000 * 60 * 60 * 12;

// 40 hrs
export const VERY_HARD_PUNISHMENT = 1000 * 60 * 60 * 40;
// if new crime is less than 4 hours after previous, we multiply times
export const MAX_TIME_FOR_PUNISHMENT_MULTIPLY = 1000 * 60 * 4;

// 6 hours
export const CRIMES_INTERVAL_FOR_MULTIPLY = 1000 * 60 * 60 * 6;
