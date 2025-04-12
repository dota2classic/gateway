export class FindByNameQuery {
  constructor(
    public readonly query: string,
    public readonly limit: number,
  ) {}
}
