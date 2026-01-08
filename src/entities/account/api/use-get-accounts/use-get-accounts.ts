import type { Account } from '@shared/lib/types/account';

import { useQuery } from '@tanstack/react-query';

import { fetchAccounts } from '../fetch-accounts';

export const useGetAccounts = (serviceId: string) => {
	return useQuery<Account[]>({
		queryFn: async () => fetchAccounts(serviceId),
		queryKey: ['accounts', serviceId],
	});
};
