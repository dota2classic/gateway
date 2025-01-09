export class Page<DataType, CursorType = unknown> {
  data: DataType[];
  page: number;
  perPage: number;
  pages: number;
  cursor?: CursorType;
}
