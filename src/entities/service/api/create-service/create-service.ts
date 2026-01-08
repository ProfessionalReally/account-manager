import { api } from '@shared/api/axios';

import type { ServiceFormData } from '../types';

export const createService = async (serviceData: ServiceFormData) => {
	await api.post('/services', serviceData);
};
