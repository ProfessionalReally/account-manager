import { Box, Button, Paper, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { InlineBadge } from '@shared/ui/inline-badge';
import { ServiceList } from '@pages/services/service-list';
import { useGetServices } from '@entities/service';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';

const ContainerServices = styled(Paper)(({ theme }) => ({
	padding: '20px 40px',
	borderRadius: 16,
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
	backgroundColor: theme.palette.background.paper,
}));

const Header = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});

const TitleBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	gap: 8,
});

export function ServicesLayout() {
	const services = useGetServices();

	const servisesCount = services.data?.length;

	console.log(services.data);

	return (
		<ContainerServices>
			{/* TODO: Использовать потом эти наработки формы*/}
			{/*<Paper*/}
			{/*	component={'form'}*/}
			{/*	sx={{*/}
			{/*		backgroundColor: '#444e83',*/}
			{/*		maxWidth: '378px',*/}
			{/*		width: '100%',*/}
			{/*		padding: '30px 20px',*/}
			{/*		display: 'flex',*/}
			{/*		flexDirection: 'column',*/}
			{/*		gap: 2,*/}
			{/*	}}*/}
			{/*>*/}
			{/*	<Typography*/}
			{/*		component={'h3'}*/}
			{/*		variant={'h5'}*/}
			{/*		sx={{ color: 'primary.contrastText' }}*/}
			{/*	>*/}
			{/*		Add New Service*/}
			{/*	</Typography>*/}
			{/*	<BaseTextField*/}
			{/*		placeholder='Website'*/}
			{/*		beforeInput={<LanguageIcon />}*/}
			{/*	/>*/}
			{/*	<BaseTextField*/}
			{/*		placeholder='Service Name'*/}
			{/*		beforeInput={<LabelImportantOutlineRoundedIcon />}*/}
			{/*	/>*/}
			{/*	<BaseTextField*/}
			{/*		placeholder='Icon URL'*/}
			{/*		beforeInput={<ImageRoundedIcon />}*/}
			{/*	/>*/}
			{/*	<Combobox*/}
			{/*		options={[*/}
			{/*			{ label: 'Option 1', id: '1' },*/}
			{/*			{ label: 'Option 2', id: '2' },*/}
			{/*		]}*/}
			{/*	/>*/}
			{/*	<Button variant='contained' type='submit'>*/}
			{/*		Add*/}
			{/*	</Button>*/}
			{/*</Paper>*/}
			<Header>
				<TitleBox>
					<Typography
						component={'h3'}
						variant={'h5'}
						sx={{
							color: 'primary.contrastText',
						}}
					>
						Your Services
					</Typography>
					<InlineBadge>{servisesCount}</InlineBadge>
				</TitleBox>
				<Button
					variant='contained'
					color='info'
					aria-label='add'
					size='medium'
					startIcon={<AddIcon />}
				>
					Add New Service
				</Button>
			</Header>
			{services.isLoading && <FullscreenLoader />}
			{services.data && <ServiceList services={services.data} />}
		</ContainerServices>
	);
}
