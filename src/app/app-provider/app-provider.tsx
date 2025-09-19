import { theme } from '@app/lib/theme/theme';
import { ThemeProvider } from '@mui/material';
import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { DialogsProvider } from '@toolpad/core/useDialogs';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<DialogsProvider>
					<BrowserRouter>{children}</BrowserRouter>
				</DialogsProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
