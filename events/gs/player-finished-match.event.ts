import { MatchmakingMode } from '../../shared-types/matchmaking-mode';

export class PlayerFinishedMatchEvent {
  constructor(
    public readonly matchId: number,
    public readonly steamId: string,
    public readonly lobbyType: MatchmakingMode,
    public readonly isFirstGame: boolean,
    public readonly unrankedGamesCount: number,
    public readonly anyGamesCount: number,
  ) {
  }
}
