import type { Account } from '@shared/lib/types/account';
import type { FC } from 'react';

import { Grid, Paper, styled } from '@mui/material';

// import { ServiceModal } from '../service-modal';

const StyledServiceCard = styled(Paper)(({ theme }) => ({
	background: '#444e83',
	borderRadius: theme.shape.borderRadius * 3,
	display: 'flex',
	gap: theme.spacing(2),
	height: '100%',
	padding: theme.spacing(2),
}));

type AccountCardProps = {
	account: Account;
};

export const AccountCard: FC<AccountCardProps> = ({ account }) => {
	const {
		comment,
		email,
		id,
		login,
		name,
		password,
		phone,
		serviceId,
		updatedAt,
	} = account;

	return (
		<Grid size={{ lg: 6, xl: 3, xs: 12 }} sx={{ height: 200 }}>
			<StyledServiceCard variant='outlined'></StyledServiceCard>
		</Grid>
	);
};
