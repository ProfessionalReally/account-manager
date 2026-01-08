import { useCurrentUser } from '@entities/auth';
import { Box, styled, Typography } from '@mui/material';
import { useMemo } from 'react';
import { HeaderAuthorized } from './header-authorized';
import { HeaderUnauthorized } from './header-unauthorized';

const HeaderContainer = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flex: 1,
}));

const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	fontWeight: 'bold',
}));

export const HeaderMenu = () => {
	const { data: user, isLoading, isError } = useCurrentUser();

	const AppTitle = useMemo(
		() => <Title variant='h5'>Account Manager</Title>,
		[],
	);

	if (isLoading) {
		return <HeaderContainer>{AppTitle}</HeaderContainer>;
	}

	if (isError || !user?.data) {
		return (
			<HeaderContainer>
				{AppTitle}
				<HeaderUnauthorized />
			</HeaderContainer>
		);
	}

	return <HeaderAuthorized user={user.data} />;
};
