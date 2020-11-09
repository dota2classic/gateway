import { PlayerId } from '../shared-types/player-id';

export class InviteToPartyCommand {
  constructor(
    public readonly playerId: PlayerId,
    public readonly invitee: PlayerId,
  ) {}
}
