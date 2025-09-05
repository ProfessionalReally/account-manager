//TODO: Реализовать header
import { Paper, Typography } from '@mui/material';

export function Header() {
	return (
		<Paper
			sx={{
				padding: '20px 40px',
				borderRadius: '0 0 16px 16px',
			}}
		>
			<Typography
				component={'h1'}
				variant={'h5'}
				sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}
			>
				Account Manager
			</Typography>
		</Paper>
	);
}
