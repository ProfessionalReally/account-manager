import { useGetAccountByIdDecrypted } from '@entities/account/api/use-get-account-by-id-decrypted';
import { EDIT } from '@shared/config/form-actions/form-actions';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { invariant } from 'es-toolkit';
import type { AccountModalPayload } from '../account-modal';
import { AccountForm } from './account-form';

export const AccountFormContainer = () => {
	const { payload } = useModal<AccountModalPayload>();

	const { action } = payload;

	const id = action === EDIT ? payload.id : undefined;

	if (action === EDIT) {
		invariant(id, 'id is required');
	}

	const accounts = useGetAccountByIdDecrypted(id, payload.masterKey);

	if (accounts.isLoading) {
		return null;
	}

	const account = accounts.data;

	if (action === EDIT) {
		invariant(account, 'Account is not found');
	}

	return <AccountForm data={account} />;
};
