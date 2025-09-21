import { AccountManager } from '@app/account-manager.tsx';
import { AppProvider } from '@app/app-provider/app-provider.tsx';
import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppProvider>
			<CssBaseline />
			<AccountManager />
		</AppProvider>
	</StrictMode>,
);
