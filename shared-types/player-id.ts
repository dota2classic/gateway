export class PlayerId {
  private static regex = new RegExp(`\\[U:1:\\d+\]`);
  constructor(public readonly value: string) {
    if (!PlayerId.regex.test(value)) {
      throw new Error("Wrong id");
    }
  }
}
