import { PlayerId } from '../../shared-types/player-id';
import { Role } from '../../shared-types/roles';

export class UserEntry {
  constructor(
    public readonly id: PlayerId,
    public readonly name: string,
    public readonly avatar: string,
    public readonly roles: Role[]
  ) {}
}
export class GetAllQueryResult {
  constructor(public readonly entries: UserEntry[]) {}
}
