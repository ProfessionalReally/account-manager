import { api } from '@shared/api/axios';
import type { ApiResponse } from '@shared/api/types';
import type { Category } from '@shared/lib/types/category';

export const fetchCategory = async () => {
	const { data } = await api.get<ApiResponse<Category[]>>('/categories');

	return data;
};
