export class PlayerId {
  private static regex = new RegExp(`\\[U:1:\\d+\]`).compile();
  constructor(private readonly _value: string) {
    if (!PlayerId.regex.test(_value)) {
      throw new Error("Wrong id");
    }
  }

  public get value() {
    return this._value;
  }
}
