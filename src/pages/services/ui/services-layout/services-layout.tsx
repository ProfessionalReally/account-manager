import { useGetServices } from '@entities/service';
import { Paper, styled } from '@mui/material';
import { ADD } from '@shared/config/form-actions/form-actions';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { PaperListHeader } from '@shared/ui/paper-list-header';

import { ServiceList } from '../service-list';
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

export const ServicesLayout = () => {
	const { data, isLoading } = useGetServices();

	return (
		<ContainerServices>
			<PaperListHeader
				buttonChildren={'Add New Service'}
				count={data?.data?.pagination.total}
				modal={ServiceModal}
				payload={{ action: ADD }}
				text='Your Services'
			/>
			{isLoading && <FullscreenLoader />}
			{data?.data && <ServiceList services={data.data?.data} />}
		</ContainerServices>
	);
};
