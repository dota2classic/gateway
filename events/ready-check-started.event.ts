import { ReadyCheckEntry } from "./room-ready-check-complete.event";

export class ReadyCheckStartedEvent {
  constructor(
    public readonly roomId: string,
    public readonly entries: { total: number; accepted: number },
  ) {}
}
