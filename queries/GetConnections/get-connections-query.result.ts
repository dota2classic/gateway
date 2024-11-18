import { ConnectionEntry } from "../GetAllConnections/get-all-connections-query.result";

export class GetConnectionsQueryResult {
  constructor(public readonly con?: ConnectionEntry) {}
}
