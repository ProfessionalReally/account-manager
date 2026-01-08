import type { Account } from '@shared/lib/types/account';

import { useQuery } from '@tanstack/react-query';

import { fetchAccountById } from '../fetch-account-by-id';

export const useGetAccountById = (id: string) => {
	return useQuery<Account[]>({
		queryFn: () => fetchAccountById(id),
		queryKey: ['account', id],
	});
};
