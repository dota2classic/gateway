import { BanStatus } from '../../queries/GetPlayerInfo/get-player-info-query.result';

export class PlayerSmurfDetectedEvent {
  constructor(
    public readonly steamId: string,
    public readonly steamIds: string[],
    public readonly bans: BanStatus[]
  ) {
  }
}
