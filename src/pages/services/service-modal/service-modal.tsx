import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import { AppModal, useModal } from '@shared/ui/app-modal';

import { ServiceForm } from './service-form';

export const ServiceModal = () => {
	const { handleClose } = useModal();

	return (
		<AppModal
			body={<ServiceForm />}
			footer={
				<>
					<Button
						color='error'
						onClick={handleClose}
						type='button'
						variant='contained'
					>
						Cancel
					</Button>
					<Button type='submit' variant='contained'>
						Save
					</Button>
				</>
			}
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
