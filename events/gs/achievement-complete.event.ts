import { AchievementKey } from '../../shared-types/achievemen-key';

export class AchievementCompleteEvent {
  constructor(
    public readonly achievement: AchievementKey,
    public readonly playerId: string,
    public readonly hero: string,
    public readonly matchId: number,
    public readonly progress: number,
    public readonly checkpointValue: number,
    public readonly checkpoints: number[],
  ) {}
}
