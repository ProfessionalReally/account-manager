import { useQuery } from '@tanstack/react-query';

import { fetchServices } from '@entities/service/api/fetch-services';
import type { Service } from '@shared/lib/types/service';

export const useGetServices = () => {
	return useQuery<Service[]>({
		queryKey: ['services'],
		queryFn: fetchServices,
	});
};
