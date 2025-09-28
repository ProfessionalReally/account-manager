import type { Service } from '@shared/lib/types/service';

import axios from 'axios';

const baseUrlServer = import.meta.env.VITE_BASE_URL_SERVER;

export const fetchCategory = async () => {
	const { data } = await axios.get<Service[]>(`${baseUrlServer}/category`);

	return data;
};
