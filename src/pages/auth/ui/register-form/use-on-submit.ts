import { useRegister } from '@entities/auth';

import type { RegisterFormData } from './register-validation-schema';

export const useOnSubmit = () => {
	const register = useRegister();

	return async (data: RegisterFormData) => {
		const { confirmPassword, ...otherData } = data;
		await register.mutateAsync(otherData);
	};
};
