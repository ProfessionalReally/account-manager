import { useGetServiceById } from '@entities/service';
import {
	EDIT,
	type FormAction,
} from '@shared/config/form-actions/form-actions';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { invariant } from 'es-toolkit';

import { ServiceForm } from './service-form';

export const ServiceFormContainer = () => {
	const { payload } = useModal<{ action: FormAction; id: string }>();

	const { action } = payload;

	const id = action === EDIT ? payload.id : undefined;

	if (action === EDIT) {
		invariant(id, 'id is required');
	}

	const services = useGetServiceById(id!);

	if (services.isLoading) {
		return null;
	}

	const service = services.data?.[0];

	if (action === EDIT) {
		invariant(service, 'Service is not found');
	}

	return <ServiceForm data={service} />;
};
