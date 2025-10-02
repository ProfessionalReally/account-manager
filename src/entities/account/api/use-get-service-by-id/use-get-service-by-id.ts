import type { Service } from '@shared/lib/types/service';

import { useQuery } from '@tanstack/react-query';

import { fetchServiceById } from '../fetch-service-by-id';

export const useGetServiceById = (id: string) => {
	return useQuery<Service[]>({
		queryFn: () => fetchServiceById(id),
		queryKey: ['services', id],
	});
};
