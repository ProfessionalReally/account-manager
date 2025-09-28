import { createContext } from 'react';

import type { ModalContextValue } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModalContext = createContext<ModalContextValue<any> | undefined>(
	undefined,
);
