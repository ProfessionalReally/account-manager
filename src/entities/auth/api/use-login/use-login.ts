import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { useMutation } from '@tanstack/react-query';

import { ROUTE_PATH } from '@shared/config/router/routes';
import { useNavigate } from 'react-router-dom';
import { login } from '../login';

export const useLogin = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			queryClient.setQueryData(['current-user'], data);
			navigate(ROUTE_PATH.MAIN);
		},
	});
};
