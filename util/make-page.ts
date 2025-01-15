import { Page } from '../shared-types/page';

export async function makePage<RawType, CursorType, MappedType = RawType>(
  items: RawType[],
  total: number,
  page: number,
  perPage: number,
  mapper: (r: RawType) => Promise<MappedType> | MappedType,
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
