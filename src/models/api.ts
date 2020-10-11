export interface ApiType<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
