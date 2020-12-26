import { UserEntry } from '../../queries/GetAll/get-all-query.result';

export class UserRoleTimingsUpdateEvent {
  constructor(public readonly entry: UserEntry) {
  }
}
