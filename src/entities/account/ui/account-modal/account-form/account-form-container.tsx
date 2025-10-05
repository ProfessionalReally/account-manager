import { useGetAccountById } from '@entities/account/api/use-get-account-by-id';
import {
	EDIT,
	type FormAction,
} from '@shared/config/form-actions/form-actions';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { invariant } from 'es-toolkit';

import { AccountForm } from './account-form';

export const AccountFormContainer = () => {
	const { payload } = useModal<{ action: FormAction; id: string }>();

	const { action } = payload;

	const id = action === EDIT ? payload.id : undefined;

	if (action === EDIT) {
		invariant(id, 'id is required');
	}

	const accounts = useGetAccountById(id!);

	if (accounts.isLoading) {
		return null;
	}

	const account = accounts.data?.[0];

	if (action === EDIT) {
		invariant(account, 'Account is not found');
	}

	return <AccountForm data={account} />;
};
