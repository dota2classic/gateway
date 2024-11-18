import { PlayerId } from "../shared-types/player-id";

export enum ReadyState {
  READY,
  DECLINE,
  TIMEOUT,
  PENDING,
}

export class ReadyStateReceivedEvent {
  constructor(
    public readonly playerID: PlayerId,
    public readonly roomID: string,
    public readonly state: ReadyState,
  ) {}
}
