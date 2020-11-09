import { PlayerId } from '../shared-types/player-id';

export class LeavePartyCommand {
  constructor(public readonly playerId: PlayerId) {
  }
}