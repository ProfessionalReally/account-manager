import { useGetAccounts } from '@entities/account';
import { AccountModal } from '@entities/account/ui/account-modal';
import { useRequireMasterKey } from '@entities/user/ui/master-key-modal/use-require-master-key';
import { Stack } from '@mui/material';
import { AppPagination } from '@shared/ui/app-pagination';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { PageLayout } from '@shared/ui/page-layout';
import { PaperListHeader } from '@shared/ui/paper-list-header';
import { useDialogs } from '@toolpad/core/useDialogs';
import { invariant } from 'es-toolkit';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AccountList } from '../account-list';

const LIMIT = 30;

export const AccountsLayout = () => {
	const { serviceId } = useParams();
	const requireMasterKey = useRequireMasterKey();

	invariant(serviceId, 'serviceId is required');

	const dialogs = useDialogs();

	const [page, setPage] = useState(1);

	const { data, isLoading } = useGetAccounts({
		serviceId,
		page,
		limit: LIMIT,
	});

	const onPageChange = (_: React.ChangeEvent<unknown>, page: number) => {
		setPage(page);
	};
	const onButtonClick = async () => {
		const key = await requireMasterKey();
		dialogs.open(AccountModal, {
			action: 'ADD',
			masterKey: key,
			serviceId,
		});
	};

	return (
		<PageLayout>
			<PaperListHeader
				buttonChildren={'Add New Account'}
				count={data?.data?.pagination.total}
				onButtonClick={onButtonClick}
				text='Your Accounts'
			/>
			{isLoading && <FullscreenLoader />}
			{data?.data && (
				<>
					<AccountList accounts={data.data.data} />
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
