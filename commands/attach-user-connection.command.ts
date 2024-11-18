import { UserConnection } from "../shared-types/user-connection";
import { PlayerId } from "../shared-types/player-id";

export class AttachUserConnectionCommand {
  constructor(
    public readonly playerId: PlayerId,
    public readonly connection: UserConnection,
    public readonly externalId: string,
  ) {}
}
