export enum BracketType {
  SINGLE_ELIMINATION = 'SINGLE_ELIMINATION',
  DOUBLE_ELIMINATION = 'DOUBLE_ELIMINATION',
}

export enum TournamentStatus {
  DRAFT = 'DRAFT',
  REGISTRATION = 'REGISTRATION',
  READY_CHECK = 'READY_CHECK',
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED',
}

export enum MatchStatus {
  /** The two matches leading to this one are not completed yet. */
  Locked = 0,
  /** One participant is ready and waiting for the other one. */
  Waiting = 1,
  /** Both participants are ready to start. */
  Ready = 2,
  /** The match is running. */
  Running = 3,
  /** The match is completed. */
  Completed = 4,
  /** At least one participant completed his following match. */
  Archived = 5
}
