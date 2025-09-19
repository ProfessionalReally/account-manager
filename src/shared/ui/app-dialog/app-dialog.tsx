import type { DialogProps } from '@toolpad/core/useDialogs';

import { ModalProvider } from '@shared/lib/modal-context/modal-provider';

import type { AppDialogPayload } from './types';

import { AppDialogLayout } from './app-dialog-layout';

export const AppDialog = ({
	onClose,
	open,
	payload,
}: DialogProps<AppDialogPayload>) => {
	return (
		<ModalProvider onClose={onClose} open={open} payload={payload}>
			<AppDialogLayout />
		</ModalProvider>
	);
};
