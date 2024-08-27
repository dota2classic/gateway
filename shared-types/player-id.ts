export class PlayerId {
  constructor(public readonly value: string) {
    if (Number.isNaN(parseInt(value))) {
      throw new Error("Wrong id");
    }
  }
}
