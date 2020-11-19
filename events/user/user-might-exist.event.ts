import { PlayerId } from '../../shared-types/player-id';

export class UserMightExistEvent {
  constructor(public readonly id: PlayerId) {
  }
}