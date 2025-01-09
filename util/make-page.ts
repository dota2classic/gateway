import { Page } from '../shared-types/page';

export async function makePage<RawType, CursorType, MappedType = RawType>(
  items: RawType[],
  total: number,
  page: number,
  perPage: number,
  mapper: (R) => Promise<MappedType> | MappedType = (x) => x,
  cursor?: CursorType,
): Promise<Page<MappedType, CursorType>> {
  return {
    data: await Promise.all(items.map(mapper)),
    page,
    perPage: perPage,
    pages: Math.ceil(total / perPage),
    cursor,
  };
}
