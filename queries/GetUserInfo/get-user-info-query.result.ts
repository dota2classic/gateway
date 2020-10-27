import { PlayerId } from '../../shared-types/player-id';

export class GetUserInfoQueryResult {
  constructor(public readonly id: PlayerId, public readonly name: string) {
  }
}