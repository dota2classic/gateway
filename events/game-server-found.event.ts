import { Dota2Version } from '../shared-types/dota2version';

export class GameServerFoundEvent {
  constructor(
    public readonly url: string,
    public readonly roomId: string,
    public readonly version: Dota2Version,
  ) {}
}
