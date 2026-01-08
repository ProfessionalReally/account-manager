import { api } from '@shared/api/axios';

import type { ServiceFormData } from '../types';

export const editService = async (serviceData: ServiceFormData, id: string) => {
	await api.patch(`/services/${id}`, serviceData);
};
