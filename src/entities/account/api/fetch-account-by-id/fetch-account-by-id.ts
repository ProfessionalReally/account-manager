import type { Account } from '@shared/lib/types/account';

import axios from 'axios';

const baseUrlServer = import.meta.env.VITE_BASE_URL_SERVER;

export const fetchAccountById = async (id: string) => {
	const { data } = await axios.get<Account[]>(`${baseUrlServer}/account`, {
		params: { id },
	});

	return data;
};
