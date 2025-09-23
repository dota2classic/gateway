import { MatchmakingMode } from '../shared-types/matchmaking-mode';
import { MatchArtifactType } from '../shared-types/match-artifact-type';

export class MatchArtifactUploadedEvent {
  constructor(
    public readonly matchId: number,
    public readonly lobbyType: MatchmakingMode,
    public readonly artifactType: MatchArtifactType,
    public readonly bucket: string,
    public readonly key: string,
  ) {}
}
