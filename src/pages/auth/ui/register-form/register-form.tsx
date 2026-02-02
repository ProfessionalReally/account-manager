import { zodResolver } from '@hookform/resolvers/zod';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Button, CircularProgress, IconButton } from '@mui/material';
import { BaseTextField } from '@shared/ui/base-text-field';
import { PasswordField } from '@shared/ui/password-field';
import { useForm } from 'react-hook-form';

import { generatePassword } from '@shared/lib/generate-password';
import { useCallback, useMemo } from 'react';
import {
	type RegisterFormData,
	registerValidationSchema,
} from './register-validation-schema';
import { useInitialValues } from './use-initial-values';
import { useOnSubmit } from './use-on-submit';

export const RegisterForm = () => {
	const defaultValues = useInitialValues();

	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		setValue,
		setError,
		control,
	} = useForm<RegisterFormData>({
		defaultValues,
		resolver: zodResolver(registerValidationSchema),
	});

	const onSubmit = useOnSubmit(setError);

	const onClickGeneratePassword = useCallback(() => {
		const password = generatePassword();

		const options = {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		};

		setValue('password', password, options);

		setValue('confirmPassword', password, options);
	}, [setValue]);

	const GeneratePasswordButton = useMemo(
		() => (
			<IconButton
				aria-label='Generate password'
				onClick={onClickGeneratePassword}
			>
				<AutorenewIcon />
			</IconButton>
		),
		[onClickGeneratePassword],
	);

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
				control={control}
				required
				afterInput={GeneratePasswordButton}
			/>
			<PasswordField<RegisterFormData>
				errors={errors}
				label='Confirm Password'
				name='confirmPassword'
				placeholder='Enter confirm password'
				control={control}
				afterInput={GeneratePasswordButton}
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
