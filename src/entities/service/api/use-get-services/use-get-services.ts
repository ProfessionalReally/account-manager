import { fetchServices } from '@entities/service/api/fetch-services';
import type { PaginationParams } from '@shared/api/types';
import { useQuery } from '@tanstack/react-query';

export const useGetServices = ({ page, limit }: PaginationParams) => {
	return useQuery({
		queryFn: () => fetchServices({ page, limit }),
		queryKey: ['services', page, limit],
	});
};
