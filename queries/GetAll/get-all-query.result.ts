import { PlayerId } from '../../shared-types/player-id';

export class UserEntry {
  constructor(public readonly id: PlayerId, public readonly name: string) {}
}
export class GetAllQueryResult {
  constructor(public readonly entries: UserEntry[]) {}
}