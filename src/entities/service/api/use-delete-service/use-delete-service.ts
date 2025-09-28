import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { useMutation } from '@tanstack/react-query';

import { deleteService } from '../delete-service';

export const useDeleteService = () => {
	return useMutation({
		mutationFn: deleteService,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['services'] });
		},
	});
};
