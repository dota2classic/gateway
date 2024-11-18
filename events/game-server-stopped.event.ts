import { Dota2Version } from "../shared-types/dota2version";

export class GameServerStoppedEvent {
  constructor(
    public readonly url: string,
    public readonly version: Dota2Version,
  ) {}
}
