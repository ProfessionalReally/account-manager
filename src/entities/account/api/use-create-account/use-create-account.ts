import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { useMutation } from '@tanstack/react-query';

import { createAccount } from '../create-account';

export const useCreateAccount = () => {
	return useMutation({
		mutationFn: createAccount,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['accounts'] });
		},
	});
};
