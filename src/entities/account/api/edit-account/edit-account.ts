import { api } from '@shared/api/axios';

import type { AccountFormData } from '../types';

export const editAccount = async (accountData: AccountFormData, id: string) => {
	await api.patch(`/accounts/${id}`, accountData);
};
