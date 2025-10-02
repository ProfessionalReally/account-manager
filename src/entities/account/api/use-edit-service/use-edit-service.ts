import type { Service } from '@shared/lib/types/service';

import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { useMutation } from '@tanstack/react-query';

import { editService } from '../edit-service';

export const useEditService = () => {
	return useMutation({
		mutationFn: ({ data, id }: { data: Omit<Service, 'id'>; id: string }) =>
			editService(data, id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['services'] });
		},
	});
};
