import { api } from '@shared/api/axios';

export const deleteAccount = async (id: string) => {
	await api.delete(`/accounts/${id}`);
};
