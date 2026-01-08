import { zodResolver } from '@hookform/resolvers/zod';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Button, CircularProgress } from '@mui/material';
import { BaseTextField } from '@shared/ui/base-text-field';
import { PasswordField } from '@shared/ui/password-field';
import { useForm } from 'react-hook-form';

import {
	type RegisterFormData,
	registerValidationSchema,
} from './register-validation-schema';
import { useInitialValues } from './use-initial-values';
import { useOnSubmit } from './use-on-submit';

export const RegisterForm = () => {
	const onSubmit = useOnSubmit();
	const defaultValues = useInitialValues();

	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
	} = useForm<RegisterFormData>({
		defaultValues,
		resolver: zodResolver(registerValidationSchema),
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
				width: 400,
			}}
		>
			<BaseTextField
				{...register('email')}
				afterInput={<EmailRoundedIcon />}
				error={!!errors.email}
				helperText={errors.email?.message}
				label='Email'
				placeholder='Enter email'
				required
				type='email'
			/>
			<PasswordField<RegisterFormData>
				errors={errors}
				label='Password'
				name='password'
				placeholder='Enter password'
				register={register}
				required
			/>
			<PasswordField<RegisterFormData>
				errors={errors}
				label='Confirm Password'
				name='confirmPassword'
				placeholder='Enter confirm password'
				register={register}
				required
			/>
			<Button
				disabled={isSubmitting}
				sx={{ mt: 3 }}
				type='submit'
				variant='contained'
			>
				{isSubmitting ? (
					<CircularProgress color='info' size={20} />
				) : (
					'Register'
				)}
			</Button>
		</form>
	);
};
