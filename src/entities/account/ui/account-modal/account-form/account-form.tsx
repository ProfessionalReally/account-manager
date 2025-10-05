import type { Account, AccountFormData } from '@shared/lib/types/account';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, Stack } from '@mui/material';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { BaseTextField } from '@shared/ui/base-text-field';
import { useForm } from 'react-hook-form';

import { accountValidationSchema } from './account-validation-schema';
import { useInitialValues } from './use-initial-values';
// import { useOnSubmit } from './use-on-submit';

export const AccountForm = ({ data }: { data?: Account }) => {
	const { onClose } = useModal();

	// const onSubmit = useOnSubmit();
	const defaultValues = useInitialValues(data);

	const {
		formState: { errors, isSubmitting },
		// handleSubmit,
		register,
	} = useForm<AccountFormData>({
		defaultValues,
		// resolver: zodResolver(accountValidationSchema),
	});
	return (
		<form
			// onSubmit={handleSubmit(onSubmit)}
			style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
		>
			<BaseTextField
				placeholder='Enter account name'
				{...register('name')}
				error={!!errors.name}
				helperText={errors.name?.message}
				label='Name'
				required
			/>

			<BaseTextField
				{...register('login')}
				error={!!errors.login}
				helperText={errors.login?.message}
				label='Login'
				placeholder='Enter login'
			/>

			<BaseTextField
				{...register('email')}
				error={!!errors.email}
				helperText={errors.email?.message}
				label='Email'
				placeholder='Enter email'
				type='email'
			/>

			<BaseTextField
				{...register('phone')}
				error={!!errors.phone}
				helperText={errors.phone?.message}
				label='Phone'
				placeholder='Enter phone'
				type='tel'
			/>

			<BaseTextField
				{...register('password')}
				error={!!errors.password}
				helperText={errors.password?.message}
				label='Password'
				required
				type='password'
			/>

			<BaseTextField
				{...register('comment')}
				error={!!errors.comment}
				helperText={errors.comment?.message}
				label='Comment'
				multiline
				placeholder='Enter comment'
				rows={4}
			/>

			<Stack
				direction={'row'}
				gap={2}
				justifyContent={'flex-end'}
				sx={{ mt: 2 }}
			>
				<Button
					disabled={isSubmitting}
					type='submit'
					variant='contained'
				>
					{isSubmitting ? (
						<CircularProgress color='info' size={20} />
					) : (
						'Save'
					)}
				</Button>
				<Button
					color='error'
					onClick={() => onClose()}
					type='button'
					variant='contained'
				>
					Cancel
				</Button>
			</Stack>
		</form>
	);
};
