import { PlayerId } from '../../shared-types/player-id';

export class UserLoggedInEvent {
  constructor(
    public readonly playerId: PlayerId,
    public readonly name: string,
    public readonly avatar: string,
  ) {}
}
