import { Role } from "../shared-types/roles";
import { UserConnection } from "../shared-types/user-connection";
import { UserRelationStatus } from "../shared-types/user-relation";

export class ExternalUserConnection {
  connection: UserConnection;
  externalId: string;
}
export class UserFastProfileDto {
  steamId: string;
  name: string;
  avatar: string;
  roles: Role[];
  connections: ExternalUserConnection[];
}

export class UserFastRelationDto {
  steamId: string;
  relatedSteamId: string;
  relation: UserRelationStatus;
}
