import { api } from '@shared/api/axios';

import type { ApiResponse } from '@shared/api/types';
import type { User } from '@shared/lib/types/user';
import type { Auth } from '../types';

export const login = async (authData: Auth) => {
	const { data } = await api.post<ApiResponse<User>>('/auth/login', authData);

	return data;
};
