export type ApiSuccess<T> = {
	data: T;
	error?: never;
};

export type ApiFailure = {
	error: string;
	data?: never;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

type Pagination = {
	page: number;
	limit: number;
	total: number;
	lastPage: number;
};

type PaginatedData<T> = {
	data: T[];
	pagination: Pagination;
};

export type PaginatedApiResponse<T> = ApiResponse<PaginatedData<T>>;
