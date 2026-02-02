import { useModal } from '@shared/lib/modal-context/use-modal';
import type { AccountModalPayload } from '../account-modal';
import type { AccountFormData } from './types';

export const useInitialValues = (data?: AccountFormData) => {
	const { payload } = useModal<AccountModalPayload>();

	if (payload.action === 'EDIT' && data) {
		return {
			comment: data.comment,
			username: data.username,
			password: data.password,
		};
	}

	return {
		comment: '',
		username: '',
		password: '',
	};
};
