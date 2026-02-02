import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { useMutation } from '@tanstack/react-query';

import { editAccount } from '../edit-account';
import type { AccountFormData } from '../types';

export const useEditAccount = () => {
	return useMutation({
		mutationFn: ({ data, id }: { data: AccountFormData; id: string }) =>
			editAccount(data, id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['accounts'] });
			queryClient.invalidateQueries({ queryKey: ['account'] });
		},
	});
};
