export class PlayerId {
  private static regex = new RegExp(`\\[U:1:\\d+\]`).compile();
  constructor(public readonly value: string) {
    if (!PlayerId.regex.test(value)) {
      throw new Error("Wrong id");
    }
  }
}
