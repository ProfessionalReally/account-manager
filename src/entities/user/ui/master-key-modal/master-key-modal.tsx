import type { DialogProps } from '@toolpad/core/useDialogs';

import { Typography } from '@mui/material';
import { ModalProvider } from '@shared/lib/modal-context/modal-provider';
import { AppModal } from '@shared/ui/app-modal';

import { MasterKeyForm } from './master-key-form';
import type { MasterKeyPayload } from './master-key-form/types';

export const MasterKeyModal = ({
	onClose,
	open,
	payload,
}: DialogProps<MasterKeyPayload>) => {
	const isCreate = payload.action === 'CREATE';

	return (
		<ModalProvider onClose={onClose} open={open} payload={payload}>
			<AppModal
				body={<MasterKeyForm />}
				header={
					<Typography component={'h5'} variant='h6'>
						{isCreate ? 'Create Master Key' : 'Enter Master Key'}
					</Typography>
				}
			/>
		</ModalProvider>
	);
};
