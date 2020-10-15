import { Dota2Version } from '../shared-types/dota2version';
import { MatchmakingMode } from '../shared-types/matchmaking-mode';
import { PlayerId } from '../shared-types/player-id';

export class GameServerNotFoundEvent {
  constructor(
    public readonly roomId: string,
    public readonly version: Dota2Version,
    public readonly mode: MatchmakingMode,
    public readonly radiant: PlayerId[],
    public readonly dire: PlayerId[],
    public readonly averageMMR: number,
    public readonly tries: number
  ) {}
}
