import { Button, Paper, styled, Typography } from '@mui/material';
import { ROUTE_PATH } from '@shared/config/router/routes';
import { useNavigate } from 'react-router-dom';

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

export const ErrorLayout = () => {
	const navigate = useNavigate();

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
				Error: Page Not Found
			</Typography>
			<Button
				variant='contained'
				color='primary'
				onClick={() => {
					navigate(ROUTE_PATH.MAIN);
				}}
			>
				Go to Home
			</Button>
		</Container>
	);
};
