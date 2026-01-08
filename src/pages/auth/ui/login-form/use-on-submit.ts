import type { Auth } from '@entities/auth/api/types';

import { useLogin } from '@entities/auth';
import type { AxiosError } from 'axios';
import type { UseFormSetError } from 'react-hook-form';

export const useOnSubmit = (setError: UseFormSetError<Auth>) => {
	const login = useLogin();

	return async (data: Auth) => {
		try {
			await login.mutateAsync(data);
		} catch (error) {
			const err = error as AxiosError<{ error: string }>;

			setError('password', {
				message: err.response?.data?.error ?? 'Login failed',
			});

			setError('email', {
				message: ' ',
			});
		}
	};
};
