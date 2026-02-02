import type { DialogProps } from '@toolpad/core/useDialogs';

import { Typography } from '@mui/material';
import { ModalProvider } from '@shared/lib/modal-context/modal-provider';
import { AppModal } from '@shared/ui/app-modal';

import { AccountFormContainer } from './account-form';

export type AccountModalPayload =
	| {
			id: string;
			action: 'EDIT';
			masterKey: CryptoKey;
			serviceId: string;
	  }
	| {
			action: 'ADD';
			masterKey: CryptoKey;
			serviceId: string;
	  };

export const AccountModal = ({
	onClose,
	open,
	payload,
}: DialogProps<AccountModalPayload>) => {
	return (
		<ModalProvider onClose={onClose} open={open} payload={payload}>
			<AppModal
				body={<AccountFormContainer />}
				header={
					<Typography component={'h5'} variant='h6'>
						{payload?.action === 'EDIT'
							? 'Edit account'
							: 'Add a new account'}
					</Typography>
				}
			/>
		</ModalProvider>
	);
};
