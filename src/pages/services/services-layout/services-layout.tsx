import { ServiceHeader, useGetServices } from '@entities/service';
import { Box, Button, Paper, styled, Typography } from '@mui/material';
import { ServiceList } from '@pages/services/service-list';
import { ADD } from '@shared/config/form-actions/form-actions';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { InlineBadge } from '@shared/ui/inline-badge';
import { useDialogs } from '@toolpad/core/useDialogs';

import { ServiceModal } from '../service-modal';

const ContainerServices = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: 16,
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: theme.spacing(4),
	padding: '20px 40px',
}));

const ServicesLayout = () => {
	const services = useGetServices();

	const servisesCount = services.data?.length;

	return (
		<ContainerServices>
			<ServiceHeader
				buttonChildren={'Add New Service'}
				count={servisesCount}
				modal={ServiceModal}
				payload={{ action: ADD }}
				text='Your Services'
			/>
			{services.isLoading && <FullscreenLoader />}
			{services.data && <ServiceList services={services.data} />}
		</ContainerServices>
	);
};

export default ServicesLayout;
