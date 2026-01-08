import { useQuery } from '@tanstack/react-query';

import { fetchServiceById } from '../fetch-service-by-id';

export const useGetServiceById = (id?: string) => {
	return useQuery({
		queryFn: () => fetchServiceById(id),
		queryKey: ['service', id],
		enabled: !!id,
	});
};
