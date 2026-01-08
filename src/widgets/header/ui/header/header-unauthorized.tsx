import { theme } from '@app/lib/theme/theme';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ROUTE_PATH } from '@shared/config/router/routes';
import { DomLink } from '@shared/ui/dom-link';

const Actions = styled(Box)(() => ({
	display: 'flex',
	gap: 16,
}));

export const HeaderUnauthorized = () => {
	return (
		<Actions>
			<DomLink
				color='primary.contrastText'
				to={ROUTE_PATH.LOGIN}
				sx={{
					color: theme.palette.primary.contrastText,
				}}
			>
				Login
			</DomLink>
			<DomLink
				color='primary.contrastText'
				to={ROUTE_PATH.REGISTER}
				sx={{
					color: theme.palette.primary.contrastText,
				}}
			>
				Register
			</DomLink>
		</Actions>
	);
};
