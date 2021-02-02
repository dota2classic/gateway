import { PlayerId } from '../../shared-types/player-id';

export class GetReportsAvailableQuery {
  constructor(public readonly id: PlayerId) {
  }
}
