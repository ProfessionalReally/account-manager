import { api } from '@shared/api/axios';

export const deleteService = async (id: string) => {
	await api.delete(`/services/${id}`);
};
