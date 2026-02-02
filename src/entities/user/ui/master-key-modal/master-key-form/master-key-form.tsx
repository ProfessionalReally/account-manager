import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { PasswordField } from '@shared/ui/password-field';
import { useForm } from 'react-hook-form';

import type { MasterKeyFormData, MasterKeyPayload } from './types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { masterKeyValidationSchema } from './master-key-validation-schema';
import { useInitialValues } from './use-initial-values';
import { useOnSubmit } from './use-on-submit';

export const MasterKeyForm = () => {
	const { onClose, payload } = useModal<MasterKeyPayload>();

	const defaultValues = useInitialValues();

	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		setError,
		control,
	} = useForm<MasterKeyFormData>({
		defaultValues,
		resolver: zodResolver(masterKeyValidationSchema),
	});

	const onSubmit = useOnSubmit(setError);

	const TextInfo = useMemo(() => {
		return payload.action === 'CREATE' ? (
			<>
				<Typography variant='body1' sx={{ color: 'text.primary' }}>
					Create a master password to protect your data.
				</Typography>
				<Typography
					variant='overline'
					sx={{ mb: 3, color: 'text.primary' }}
				>
					Important: remember it, recovery is impossible!
				</Typography>
			</>
		) : (
			<Typography variant='body2' sx={{ mb: 3, color: 'text.secondary' }}>
				Enter your master password to access encrypted data. The
				password is stored only in memory for the current session.
			</Typography>
		);
	}, []);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
		>
			{TextInfo}
			<PasswordField<MasterKeyFormData>
				errors={errors}
				label='Master Key'
				name='masterKey'
				placeholder='Enter master key'
				control={control}
				required
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
