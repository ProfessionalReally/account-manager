import { AppRoutes } from '@app/app-routes/app-routes..tsx';
import { useCurrentUser } from '@entities/user';
import { Box, Container, styled } from '@mui/material';
import { MasterKeyProvider } from '@shared/lib/master-key-context';
import { Header } from '@widgets/header';
import { useMemo } from 'react';

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
	const { data } = useCurrentUser();

	const user = useMemo(() => {
		return {
			masterKeySalt: data?.data?.masterKeySalt,
			keyCheck: data?.data?.keyCheck,
		};
	}, [data?.data?.masterKeySalt, data?.data?.keyCheck]);

	return (
		<MasterKeyProvider user={user}>
			<StyledBox>
				<StyledContainer maxWidth='lg'>
					<Header />
					<AppRoutes />
				</StyledContainer>
			</StyledBox>
		</MasterKeyProvider>
	);
}
