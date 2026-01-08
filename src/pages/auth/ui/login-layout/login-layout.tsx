import { Paper, styled, Typography } from '@mui/material';
import { ROUTE_PATH } from '@shared/config/router/routes';

import { theme } from '@app/lib/theme/theme';
import { DomLink } from '@shared/ui/dom-link';
import { LoginForm } from '../login-form';

const Container = styled(Paper)(({ theme }) => ({
	alignItems: 'center',
	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: theme.spacing(4),
	justifyContent: 'center',
	padding: '20px 40px',
}));
export const LoginLayout = () => {
	return (
		<Container>
			<Typography
				component={'h3'}
				sx={{
					color: 'primary.contrastText',
				}}
				textAlign='center'
				variant={'h5'}
			>
				Login
			</Typography>
			<LoginForm />
			<DomLink
				sx={{
					color: theme.palette.primary.contrastText,
				}}
				to={ROUTE_PATH.REGISTER}
			>
				Create an account
			</DomLink>
		</Container>
	);
};
