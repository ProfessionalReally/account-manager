import type { Account } from '@shared/lib/types/account';

import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import { Button, CircularProgress, Stack } from '@mui/material';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { BaseTextField } from '@shared/ui/base-text-field';
import { PasswordField } from '@shared/ui/password-field';
import { useForm } from 'react-hook-form';

import type { AccountFormData } from './types';

// import { accountValidationSchema } from './account-validation-schema';
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
				afterInput={<PersonIcon />}
				error={!!errors.name}
				helperText={errors.name?.message}
				label='Name'
				required
			/>

			<BaseTextField
				{...register('login')}
				afterInput={<LoginIcon />}
				error={!!errors.login}
				helperText={errors.login?.message}
				label='Login'
				placeholder='Enter login'
			/>

			<BaseTextField
				{...register('email')}
				afterInput={<EmailRoundedIcon />}
				error={!!errors.email}
				helperText={errors.email?.message}
				label='Email'
				placeholder='Enter email'
				type='email'
			/>

			<BaseTextField
				{...register('phone')}
				afterInput={<SmartphoneRoundedIcon />}
				error={!!errors.phone}
				helperText={errors.phone?.message}
				label='Phone'
				placeholder='Enter phone'
				type='tel'
			/>

			<PasswordField<AccountFormData>
				errors={errors}
				label='Password'
				name='password'
				placeholder='Enter password'
				register={register}
				required
			/>

			<BaseTextField
				{...register('comment')}
				afterInput={<CommentRoundedIcon />}
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
