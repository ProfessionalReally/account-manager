import { useMemo } from 'react';

import type { ModalProviderProps } from './types';

import { ModalContext } from './modal-context';

export const ModalProvider = <Payload = unknown,>({
	children,
	onClose,
	open,
	payload,
}: ModalProviderProps<Payload>) => {
	const value = useMemo(
		() => ({ onClose, open, payload }),
		[onClose, open, payload],
	);

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};
