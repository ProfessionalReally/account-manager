import type { PaginatedApiResponse, PaginationParams } from '@shared/api/types';
import type { Service } from '@shared/lib/types/service';

import { api } from '@shared/api/axios';

export const fetchServices = async ({ page, limit }: PaginationParams) => {
	const { data } = await api.get<PaginatedApiResponse<Service>>('/services', {
		params: { page, limit },
	});

	return data;
};
