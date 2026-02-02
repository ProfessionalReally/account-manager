import { api } from '@shared/api/axios';
import type { ApiResponse } from '@shared/api/types';
import type { Account } from '@shared/lib/types/account';

export const fetchAccountById = async (id: string) => {
	const { data } = await api.get<ApiResponse<Account>>(`/accounts/${id}`);

	return data;
};
