import type { PaginatedApiResponse } from '@shared/api/types';
import type { Service } from '@shared/lib/types/service';

import { api } from '@shared/api/axios';

export const fetchServices = async () => {
	const { data } = await api.get<PaginatedApiResponse<Service>>('/services');

	return data;
};
