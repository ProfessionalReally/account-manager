import { useQuery } from '@tanstack/react-query';

import { fetchCategory } from '../fetch-category';

export const useGetCategory = () => {
	return useQuery({
		queryFn: fetchCategory,
		queryKey: ['category'],
	});
};
