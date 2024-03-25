export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export interface Column<T> {
  header: string;
  accessor: keyof T;
}