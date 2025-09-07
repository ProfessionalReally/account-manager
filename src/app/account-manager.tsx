import { AppRoutes } from '@app/app-routes/app-routes..tsx';
import { Box, Container, styled } from '@mui/material';
import { Header } from '@shared/ui/header/header';

const StyledContainer = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	padding: theme.spacing(2),
	paddingTop: 0,
}));

const StyledBox = styled(Box)(({ theme }) => ({
	background: theme.palette.background.default,
	display: 'flex',
	minHeight: '100vh',
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
