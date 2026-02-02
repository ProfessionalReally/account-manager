import { useQuery } from '@tanstack/react-query';

import { fetchAccounts, type FetchAccountsParams } from '../fetch-accounts';

export const useGetAccounts = ({
	limit,
	page,
	serviceId,
}: FetchAccountsParams) => {
	return useQuery({
		queryFn: async () => fetchAccounts({ serviceId, page, limit }),
		queryKey: ['accounts', serviceId, page, limit],
	});
};
