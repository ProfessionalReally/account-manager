import { AppRoutes } from '@app/app-routes/app-routes..tsx';
import { Box, Container, styled } from '@mui/material';
import { Header } from '@shared/ui/header/header';

const StyledContainer = styled(Container)(({ theme }) => ({
	padding: theme.spacing(2),
	paddingTop: 0,
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
	background: theme.palette.background.default,
	minHeight: '100vh',
	display: 'flex',
}));

export function AccountManager() {
	return (
		<StyledBox>
			<StyledContainer maxWidth='xl'>
				<Header />
				<AppRoutes />
			</StyledContainer>
		</StyledBox>
	);
}
