import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { useMutation } from '@tanstack/react-query';

import { deleteAccount } from '../delete-account';

export const useDeleteAccount = () => {
	return useMutation({
		mutationFn: deleteAccount,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['accounts'] });
			queryClient.invalidateQueries({ queryKey: ['account'] });
		},
	});
};
