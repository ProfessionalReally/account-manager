import type { FormAction } from '@shared/config/form-actions/form-actions';
import type { DialogProps } from '@toolpad/core/useDialogs';

import { Typography } from '@mui/material';
import { ADD } from '@shared/config/form-actions/form-actions';
import { ModalProvider } from '@shared/lib/modal-context/modal-provider';
import { AppModal } from '@shared/ui/app-modal';

import { ServiceFormContainer } from './service-form';

export const AccountModal = ({
	onClose,
	open,
	payload,
}: DialogProps<{ action: Extract<FormAction, typeof ADD> }>) => {
	return (
		<ModalProvider onClose={onClose} open={open} payload={payload}>
			<AppModal
				body={<ServiceFormContainer />}
				header={
					<Typography component={'h5'} variant='h6'>
						Add a new account
					</Typography>
				}
			/>
		</ModalProvider>
	);
};
