import { UserEntry } from "../../queries/GetAll/get-all-query.result";

export class UserUpdatedEvent {
  constructor(public readonly entry: UserEntry) {}
}
