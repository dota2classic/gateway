import { Page } from '../shared-types/page';

export async function makePage<R, T = R>(
  items: R[],
  total: number,
  page: number,
  perPage: number,
  mapper: (R) => Promise<T> | T = x => x,
): Promise<Page<T>> {
  return {
    data: await Promise.all(items.map(mapper)),
    page,
    perPage: perPage,
    pages: Math.ceil(total / perPage),
  };
}
