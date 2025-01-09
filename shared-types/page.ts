export class Page<DataType, CursorType> {
  data: DataType[];
  page: number;
  perPage: number;
  pages: number;
  cursor?: CursorType;
}
