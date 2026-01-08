import type { Service } from '@shared/lib/types/service';
import type { FC } from 'react';

import { Box, Grid } from '@mui/material';
import { ServiceCard } from '@pages/services/ui/service-card';

type ServiceListProps = {
	services: Service[];
};

export const ServiceList: FC<ServiceListProps> = ({ services }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{services.map((service) => (
					<ServiceCard
						color={service.category.color}
						key={service.id}
						service={service}
					/>
				))}
			</Grid>
		</Box>
	);
};
