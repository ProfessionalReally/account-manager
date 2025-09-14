import type { ServiceFormData } from '@shared/lib/types/service';

import axios from 'axios';

const baseUrlServer = import.meta.env.VITE_BASE_URL_SERVER;

export const createService = async (serviceData: ServiceFormData) => {
	const { data } = await axios.post<ServiceFormData>(
		`${baseUrlServer}/service`,
		serviceData,
	);

	return data;
};
