import type { ServiceFormData } from '@shared/lib/types/service';

import { useCreateService } from '@entities/service';
import { useEditService } from '@entities/service/api/use-edit-service';
import {
	ADD,
	EDIT,
	type FormAction,
} from '@shared/config/form-actions/form-actions';
import { useModal } from '@shared/lib/modal-context/use-modal';

export const useOnSubmit = () => {
	const { onClose, payload } = useModal<{ action: FormAction; id: string }>();

	const { action, id } = payload;

	const createService = useCreateService();
	const editService = useEditService();

	return async (data: ServiceFormData) => {
		switch (action) {
			case ADD:
				createService.mutate(data, {
					onSuccess: () => {
						onClose();
					},
				});
				return;
			case EDIT:
				editService.mutate(
					{ data, id },
					{
						onSuccess: () => onClose(),
					},
				);
				return;
		}
	};
};
