import { UserConnection } from '../../shared-types/user-connection';

export class GetAllConnectionsQuery {
  constructor(public readonly connection: UserConnection) {
  }
}