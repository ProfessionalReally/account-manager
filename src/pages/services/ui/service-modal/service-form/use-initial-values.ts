import type { Service } from '@shared/lib/types/service';

import {
	EDIT,
	type FormAction,
} from '@shared/config/form-actions/form-actions';
import { useModal } from '@shared/lib/modal-context/use-modal';

export const useInitialValues = (data?: Service) => {
	const { payload } = useModal<{ action: FormAction; id: string }>();

	const { action } = payload;

	if (action === EDIT && data) {
		const { category, description, icon, name, url } = data;

		return {
			category: { id: category.id },
			description,
			icon,
			name,
			url,
		};
	}

	return {
		category: { id: '' },
		description: '',
		icon: '',
		name: '',
		url: '',
	};
};
