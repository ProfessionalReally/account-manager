import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AccountManager } from '@app/AccountManager';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AccountManager />
	</StrictMode>,
);
