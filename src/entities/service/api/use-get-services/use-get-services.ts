import { fetchServices } from '@entities/service/api/fetch-services';
import { useQuery } from '@tanstack/react-query';

export const useGetServices = () => {
	return useQuery({
		queryFn: fetchServices,
		queryKey: ['services'],
	});
};
