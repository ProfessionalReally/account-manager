import { Paper, styled } from '@mui/material';

export const PageLayout = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: theme.spacing(4),
	padding: '20px 40px',
}));
