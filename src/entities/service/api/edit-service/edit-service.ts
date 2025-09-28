import type { ServiceFormData } from '@shared/lib/types/service';

import axios from 'axios';

const baseUrlServer = import.meta.env.VITE_BASE_URL_SERVER;

export const editService = async (serviceData: ServiceFormData, id: string) => {
	const { data } = await axios.patch<ServiceFormData>(
		`${baseUrlServer}/service/${id}`,
		serviceData,
	);

	return data;
};
