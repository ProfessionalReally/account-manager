import { useGetAccounts } from '@entities/account';
import { AccountModal } from '@entities/account/ui/account-modal';
import { Paper, styled } from '@mui/material';
import { ADD } from '@shared/config/form-actions/form-actions';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { PaperListHeader } from '@shared/ui/paper-list-header';
import { invariant } from 'es-toolkit';
import { useParams } from 'react-router-dom';

import { AccountList } from '../account-list';

const ContainerService = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: theme.spacing(4),
	padding: '20px 40px',
}));

export const AccountsLayout = () => {
	const { serviceId } = useParams<{ serviceId: string }>();

	invariant(serviceId, 'serviceId is required');

	const accounts = useGetAccounts(serviceId);
	const accountsCount = accounts.data?.length;

	return (
		<ContainerService>
			<PaperListHeader
				buttonChildren={'Add New Account'}
				count={accountsCount}
				modal={AccountModal}
				payload={{ action: ADD }}
				text='Your Accounts'
			/>
			{accounts.isLoading && <FullscreenLoader />}
			{accounts.data && <AccountList accounts={accounts.data} />}
		</ContainerService>
	);
};
