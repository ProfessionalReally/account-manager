import { useQuery } from '@tanstack/react-query';

import { getCurrentUser } from '../current-user/get-current-user';

export const useCurrentUser = () =>
	useQuery({
		queryFn: getCurrentUser,
		queryKey: ['current-user'],
		retry: false,
	});
