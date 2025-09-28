import type { Service } from '@shared/lib/types/service';
import type { FC } from 'react';

import { useGetCategory } from '@entities/category';
import { Box, Grid } from '@mui/material';
import { ServiceCard } from '@pages/services/service-card';

type ServiceListProps = {
	services: Service[];
};

export const ServiceList: FC<ServiceListProps> = ({ services }) => {
	const categories = useGetCategory();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{services.map((service) => (
					<ServiceCard
						color={
							categories.data?.find(
								(c) => c.id === service.categoryId,
							)?.color
						}
						key={service.id}
						service={service}
					/>
				))}
			</Grid>
		</Box>
	);
};
