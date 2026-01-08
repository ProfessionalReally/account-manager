import type { ApiResponse } from '@shared/api/types';
import type { Service } from '@shared/lib/types/service';

import { api } from '@shared/api/axios';

export const fetchServiceById = async (id: string) => {
	const { data } = await api.get<ApiResponse<Service>>(`/services/${id}`);

	return data;
};
