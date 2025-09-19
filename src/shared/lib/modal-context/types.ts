import type { DialogProps } from '@toolpad/core/useDialogs';

export type ModalContextValue<Payload = unknown> = DialogProps<Payload>;

export type ModalProviderProps<Payload = unknown> =
	ModalContextValue<Payload> & {
		children: React.ReactNode;
	};
