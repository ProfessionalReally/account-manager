import { useQuery } from '@tanstack/react-query';

import { fetchAccountById } from '../fetch-account-by-id';

export const useGetAccountById = (id: string) => {
	return useQuery({
		queryFn: () => fetchAccountById(id),
		queryKey: ['account', id],
		enabled: !!id,
	});
};
