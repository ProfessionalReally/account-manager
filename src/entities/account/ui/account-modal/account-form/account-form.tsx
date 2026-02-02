import AutorenewIcon from '@mui/icons-material/Autorenew';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PersonIcon from '@mui/icons-material/Person';
import { Button, CircularProgress, IconButton, Stack } from '@mui/material';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { BaseTextField } from '@shared/ui/base-text-field';
import { PasswordField } from '@shared/ui/password-field';
import { useForm } from 'react-hook-form';

import type { AccountFormData } from './types';

import { zodResolver } from '@hookform/resolvers/zod';
import { generatePassword } from '@shared/lib/generate-password';
import { accountValidationSchema } from './account-validation-schema';
import { useInitialValues } from './use-initial-values';
import { useOnSubmit } from './use-on-submit';

export const AccountForm = ({ data }: { data?: AccountFormData }) => {
	const { onClose } = useModal();

	const onSubmit = useOnSubmit();
	const defaultValues = useInitialValues(data);
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		control,
		setValue,
	} = useForm<AccountFormData>({
		defaultValues,
		resolver: zodResolver(accountValidationSchema),
	});
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
		>
			<BaseTextField
				placeholder='Enter username'
				{...register('username')}
				afterInput={<PersonIcon />}
				error={!!errors.username}
				helperText={errors.username?.message}
				label='Username'
				required
			/>

			<PasswordField<AccountFormData>
				errors={errors}
				label='Password'
				name='password'
				placeholder='Enter password'
				control={control}
				afterInput={
					<IconButton
						aria-label='Generate password'
						onClick={() => {
							const password = generatePassword();

							setValue('password', password, {
								shouldDirty: true,
								shouldTouch: true,
								shouldValidate: true,
							});
						}}
					>
						<AutorenewIcon />
					</IconButton>
				}
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
