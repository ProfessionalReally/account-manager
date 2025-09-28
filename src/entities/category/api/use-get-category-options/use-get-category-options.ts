import { selectOptions } from '@shared/lib/select-options/select-options.ts';
import { useQuery } from '@tanstack/react-query';

import { fetchCategory } from '../fetch-category';

export const useGetCategoryOptions = () => {
	return useQuery({
		queryFn: fetchCategory,
		queryKey: ['category'],
		select: selectOptions,
	});
};
