import { Paper, styled } from '@mui/material';
import { ADD } from '@shared/config/form-actions/form-actions';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { useParams } from 'react-router-dom';

const ContainerService = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: theme.spacing(4),
	padding: '20px 40px',
}));

const AccountsLayout = () => {
	const { serviceId } = useParams<{ serviceId: string }>();

	return (
		<ContainerService>
			{/* <ServiceHeader
				buttonChildren={'Add New Account'}
				count={servisesCount}
				modal={ServiceModal}
				payload={{ action: ADD }}
				text='Your Accounts'
			/> */}
			{/* {services.isLoading && <FullscreenLoader />} */}
			{/* {services.data && <PaperListHeader services={services.data} />} */}
		</ContainerService>
	);
};

export default AccountsLayout;
