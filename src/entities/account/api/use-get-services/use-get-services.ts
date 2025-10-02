import type { Service } from '@shared/lib/types/service';

import { fetchServices } from '@entities/service/api/fetch-services';
import { useQuery } from '@tanstack/react-query';

export const useGetServices = () => {
	return useQuery<Service[]>({
		queryFn: fetchServices,
		queryKey: ['services'],
	});
};
