import { api } from '@shared/api/axios';
import type { AccountFormData } from '../types';

export const createAccount = async (accountData: AccountFormData) => {
	await api.post('/accounts', accountData);
};
