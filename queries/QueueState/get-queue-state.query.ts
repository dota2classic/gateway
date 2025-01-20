import { Dota2Version } from "../../shared-types/dota2version";

export class GetQueueStateQuery {
  constructor(public readonly version: Dota2Version) {}
}
