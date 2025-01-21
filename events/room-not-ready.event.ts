export class RoomNotReadyEvent {
  constructor(
    public readonly roomId: string,
    public readonly players: string[],
  ) {}
}
