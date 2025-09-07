import { type ReactNode, useState } from 'react';

import { ModalContext } from './modal-context';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<ModalContext.Provider value={{ handleClose, handleOpen, open }}>
			{children}
		</ModalContext.Provider>
	);
};
