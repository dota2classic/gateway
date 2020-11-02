interface Constructor<T> {
  new (...args: any[]): T;
}

export function construct<T>(constructor: Constructor<T>, data: T) {
  const buff = data;
  // @ts-ignore
  buff.__proto__ = constructor.prototype;
  return buff;
}
