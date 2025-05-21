import { MatchmakingMode } from '../shared-types/matchmaking-mode';
import { Dota2Version } from '../shared-types/dota2version';
import { MatchPlayer } from './room-ready.event';
import { Dota_GameMode } from '../shared-types/dota-game-mode';
import { Dota_Map } from '../shared-types/dota-map';

export class LobbyReadyEvent {
  constructor(
    public readonly roomId: string,
    public readonly mode: MatchmakingMode,
    public readonly map: Dota_Map,
    public readonly gameMode: Dota_GameMode,
    public readonly players: MatchPlayer[],
    public readonly version: Dota2Version,
    public readonly fillBots: boolean,
    public readonly enableCheats: boolean
  ) {}
}
