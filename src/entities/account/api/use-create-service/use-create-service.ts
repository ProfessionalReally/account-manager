import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { useMutation } from '@tanstack/react-query';

import { createService } from '../create-service';

export const useCreateService = () => {
	return useMutation({
		mutationFn: createService,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['services'] });
		},
	});
};
