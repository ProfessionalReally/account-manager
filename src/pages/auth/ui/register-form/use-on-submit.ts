import { useRegister } from '@entities/auth';

import type { AxiosError } from 'axios';
import type { UseFormSetError } from 'react-hook-form';
import type { RegisterFormData } from './register-validation-schema';

export const useOnSubmit = (setError: UseFormSetError<RegisterFormData>) => {
	const register = useRegister();

	return async (data: RegisterFormData) => {
		try {
			const { confirmPassword, ...otherData } = data;

			await register.mutateAsync(otherData);
		} catch (error) {
			const err = error as AxiosError<{ error: string }>;

			setError('confirmPassword', {
				message: err.response?.data?.error ?? 'Login failed',
			});

			setError('password', {
				message: ' ',
			});

			setError('email', {
				message: ' ',
			});
		}
	};
};
