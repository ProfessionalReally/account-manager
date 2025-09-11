import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { AppModal } from '@shared/ui/app-modal';

import { ServiceForm } from './service-form';

export const ServiceModal = () => {
	return (
		<AppModal
			body={<ServiceForm />}
			header={
				<Typography component={'h5'} variant='h6'>
					Add a new service
				</Typography>
			}
			slotProps={{
				button: {
					children: 'Add New Service',
					startIcon: <AddIcon />,
				},
			}}
		/>
	);
};
