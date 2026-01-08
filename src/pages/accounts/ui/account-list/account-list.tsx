import type { Account } from '@shared/lib/types/account';
import type { FC } from 'react';

import { Box, Grid } from '@mui/material';

import { AccountCard } from '../account-card';

type AccountListProps = {
	accounts: Account[];
};

export const AccountList: FC<AccountListProps> = ({ accounts }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{accounts.map((account) => (
					<AccountCard account={account} key={account.id} />
				))}
			</Grid>
		</Box>
	);
};
