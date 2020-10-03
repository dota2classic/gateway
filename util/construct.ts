interface Constructor<T> {
  new (...args: any[]): T;
}

export function construct<T>(constructor: Constructor<T>, data: any) {
  const buff = data;
  buff.__proto__ = constructor.prototype;
  return buff;
}
