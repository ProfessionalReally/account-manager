import { theme } from '@app/lib/theme/theme';
import { ThemeProvider } from '@mui/material';
import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { ModalProvider } from '@shared/ui/app-modal';
import { QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<ModalProvider>
					<BrowserRouter>{children}</BrowserRouter>
				</ModalProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
