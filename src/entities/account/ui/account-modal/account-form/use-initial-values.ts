import type { Account } from '@shared/lib/types/account';

import {
	EDIT,
	type FormAction,
} from '@shared/config/form-actions/form-actions';
import { useModal } from '@shared/lib/modal-context/use-modal';

export const useInitialValues = (data?: Account) => {
	const { payload } = useModal<{ action: FormAction; id: string }>();

	const { action } = payload;

	if (action === EDIT && data) {
		const { comment, email, login, name, password, phone } = data;

		return {
			comment,
			email,
			login,
			name,
			password,
			phone,
		};
	}

	return {
		comment: '',
		email: '',
		login: '',
		name: '',
		password: '',
		phone: '',
	};
};
