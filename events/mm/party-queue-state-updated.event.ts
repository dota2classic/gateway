import { PlayerId } from "../../shared-types/player-id";
import { MatchmakingMode } from "../../shared-types/matchmaking-mode";
import { Dota2Version } from "../../shared-types/dota2version";


export interface QueueState {
  mode: MatchmakingMode;
  version: Dota2Version;
}


export class PartyQueueStateUpdatedEvent {
  constructor(
    public readonly partyId: string,
    public readonly entries: PlayerId[],
    public readonly queueState?: QueueState,
  ) {
  }
}
