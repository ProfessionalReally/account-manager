import { api } from '@shared/api/axios';
import type { ApiResponse } from '@shared/api/types';
import type { User } from '@shared/lib/types/user';

export const getCurrentUser = async () => {
	const { data } = await api.get<ApiResponse<User>>('/auth/current-user');
	return data;
};
