import { encrypt } from '@shared/lib/crypto/encrypt';
import { useModal } from '@shared/lib/modal-context/use-modal';

import { useEditAccount } from '@entities/account/api/use-edit-service';
import { useCreateAccount } from '../../../api/use-create-account';
import type { AccountModalPayload } from '../account-modal';
import type { AccountFormData } from './types';

export const useOnSubmit = () => {
	const { onClose, payload } = useModal<AccountModalPayload>();

	const { action, serviceId, masterKey } = payload;

	const createAccount = useCreateAccount();
	const editAccount = useEditAccount();

	return async (data: AccountFormData) => {
		const cipherBuffer = await encrypt(data.password, masterKey);

		const values = {
			serviceId,
			username: data.username,
			comment: data.comment,
			cipherText: cipherBuffer.cipherText,
			iv: Array.from(cipherBuffer.iv),
		};

		if (action === 'ADD') {
			createAccount.mutate(values, {
				onSuccess: () => {
					onClose();
				},
			});
		} else if (action === 'EDIT') {
			const { id } = payload;
			editAccount.mutate(
				{ data: values, id },
				{
					onSuccess: () => {
						onClose();
					},
				},
			);
		}
	};
};
