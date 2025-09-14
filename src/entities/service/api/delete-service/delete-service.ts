import type { ServiceFormData } from '@shared/lib/types/service';

import axios from 'axios';

const baseUrlServer = import.meta.env.VITE_BASE_URL_SERVER;

export const deleteService = async (id: string) => {
	const { data } = await axios.delete<ServiceFormData>(
		`${baseUrlServer}/service/${id}`,
	);

	return data;
};
