interface Constructor<T> {
  new (...args: any[]): T;
}

export function construct<T>(constructor: Constructor<T>, data: T) {
  Object.setPrototypeOf(data, constructor.prototype);
  return data;
}
