import type { Service } from '@shared/lib/types/service';

import axios from 'axios';

const baseUrlServer = import.meta.env.VITE_BASE_URL_SERVER;

export const fetchServices = async () => {
	const { data } = await axios.get<Service[]>(`${baseUrlServer}/service`);

	return data;
};
