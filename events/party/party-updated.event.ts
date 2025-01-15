import { MatchmakingMode } from "../../shared-types/matchmaking-mode";

export class PartyUpdatedEvent {
  constructor(
    public readonly partyId: string,
    public readonly leaderId: string,
    public readonly players: string[],
    public readonly modes: MatchmakingMode[],
  ) {}
}
