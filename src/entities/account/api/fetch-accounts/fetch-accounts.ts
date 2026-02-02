import { api } from '@shared/api/axios';
import type { PaginatedApiResponse, PaginationParams } from '@shared/api/types';
import type { Account } from '@shared/lib/types/account';

export type FetchAccountsParams = {
	serviceId: string;
} & PaginationParams;

export const fetchAccounts = async ({
	serviceId,
	page,
	limit,
}: FetchAccountsParams) => {
	const { data } = await api.get<PaginatedApiResponse<Account>>(`/accounts`, {
		params: { serviceId, page, limit },
	});

	return data;
};
