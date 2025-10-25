export type PaginationT = {
  total: number;
  page: number;
  limit: number;
  next: string | null;
  previous: string | null;
};

export type ReadDataResponseT<T> =
  | {
      data: T;
      error?: null;
    }
  | {
      data: null;
      error: { message: string; status: number };
    };

export type PaginatedRequestParamsT = {
  limit: number;
  query?: string;
};
