import type { Service } from '@shared/lib/types/service';

import { useQuery } from '@tanstack/react-query';

import { fetchCategory } from '../fetch-category';

export const useGetCategory = () => {
	return useQuery<Service[]>({
		queryFn: fetchCategory,
		queryKey: ['category'],
	});
};
