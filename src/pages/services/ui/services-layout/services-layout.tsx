import { useGetServices } from '@entities/service';
import { Stack } from '@mui/material';
import { ADD } from '@shared/config/form-actions/form-actions';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { PaperListHeader } from '@shared/ui/paper-list-header';

import { AppPagination } from '@shared/ui/app-pagination';
import { PageLayout } from '@shared/ui/page-layout';
import { useDialogs } from '@toolpad/core/useDialogs';
import { useState } from 'react';
import { ServiceList } from '../service-list';
import { ServiceModal } from '../service-modal';

const LIMIT = 10;

export const ServicesLayout = () => {
	const dialogs = useDialogs();

	const [page, setPage] = useState(1);

	const { data, isLoading } = useGetServices({
		page,
		limit: LIMIT,
	});

	const onPageChange = (_: React.ChangeEvent<unknown>, page: number) => {
		setPage(page);
	};

	const onButtonClick = () => {
		dialogs.open(ServiceModal, { action: ADD });
	};

	return (
		<PageLayout>
			<PaperListHeader
				buttonChildren={'Add New Service'}
				count={data?.data?.pagination.total}
				onButtonClick={onButtonClick}
				text='Your Services'
			/>
			{isLoading && <FullscreenLoader />}
			{data?.data && (
				<>
					<ServiceList services={data.data?.data} />
					<Stack alignItems='center'>
						<AppPagination
							count={data.data.pagination.lastPage}
							page={page}
							onChange={onPageChange}
							showFirstButton
							showLastButton
							size='large'
						/>
					</Stack>
				</>
			)}
		</PageLayout>
	);
};
