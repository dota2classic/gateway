import { PlayerId } from "../../shared-types/player-id";
import { UserEntry } from "../../queries/GetAll/get-all-query.result";
import { Role } from "../../shared-types/roles";

export class GetUserInfoQueryResult extends UserEntry {
  constructor(
    public readonly id: PlayerId,
    public readonly name: string,
    public readonly avatar: string,
    public readonly roles: Role[],
  ) {
    super(id, name, avatar, roles);
  }
}
