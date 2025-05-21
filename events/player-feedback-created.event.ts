import { PlayerAspect } from '../shared-types/player-aspect';

export class PlayerFeedbackCreatedEvent {
  constructor(
    public readonly receiverSteamId: string,
    public readonly aspect: PlayerAspect,
    public readonly matchId: number
  ) {}
}
