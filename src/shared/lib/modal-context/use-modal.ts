import { invariant } from 'es-toolkit';
import { useContext } from 'react';

import type { ModalContextValue } from './types';

import { ModalContext } from './modal-context';

export const useModal = <Payload = unknown>() => {
	const ctx = useContext<ModalContextValue<Payload> | undefined>(
		ModalContext,
	);

	invariant(ctx, 'useModal must be used within ModalProvider');

	return ctx;
};
