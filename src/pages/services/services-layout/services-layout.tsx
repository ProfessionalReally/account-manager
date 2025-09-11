import { useGetServices } from '@entities/service';
import { Box, Paper, styled, Typography } from '@mui/material';
import { ServiceList } from '@pages/services/service-list';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { InlineBadge } from '@shared/ui/inline-badge';

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

const Header = styled(Box)({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
});

const TitleBox = styled(Box)({
	alignItems: 'center',
	display: 'flex',
	gap: 8,
});

export const ServicesLayout = () => {
	const services = useGetServices();

	const servisesCount = services.data?.length;

	return (
		<ContainerServices>
			<Header>
				<TitleBox>
					<Typography
						component={'h3'}
						sx={{
							color: 'primary.contrastText',
						}}
						variant={'h5'}
					>
						Your Services
					</Typography>
					<InlineBadge>{servisesCount}</InlineBadge>
				</TitleBox>
				<ServiceModal />
			</Header>
			{services.isLoading && <FullscreenLoader />}
			{services.data && <ServiceList services={services.data} />}
		</ContainerServices>
	);
};
