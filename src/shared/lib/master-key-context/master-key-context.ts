import { invariant } from 'es-toolkit';
import { createContext, useContext } from 'react';
import type { MasterKeyContextValue } from './types';

export const MasterKeyContext = createContext<
	MasterKeyContextValue | undefined
>(undefined);

export const useMasterKey = (): MasterKeyContextValue => {
	const ctx = useContext(MasterKeyContext);

	invariant(ctx, 'useMasterKey must be used within a MasterKeyProvider');

	return ctx;
};
