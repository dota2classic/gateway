import { MatchmakingMode } from 'gateway/shared-types/matchmaking-mode';

export class ReturnGoodPlayersToQueueEvent {
  constructor(
    public readonly steamIds: string[],
    public readonly matchId: number,
    public readonly mode: MatchmakingMode,
  ) {}
}
