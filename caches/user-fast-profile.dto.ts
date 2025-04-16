import { Role } from '../shared-types/roles';

export class UserFastProfileDto {
  steamId: string;
  name: string;
  avatar: string;
  roles: Role[];
}
