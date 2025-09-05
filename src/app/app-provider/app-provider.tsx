import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '@app/lib/theme/theme';
import { queryClient } from '@shared/lib/tanstack-query/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>{children}</BrowserRouter>
			</ThemeProvider>
		</QueryClientProvider>
	);
}
