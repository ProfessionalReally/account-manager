import { useGetAccountById } from '@entities/account';
import { useGetServiceById } from '@entities/service';
import { useDecryptPassword } from '@pages/account/lib/use-decrypt-account';
import { FullscreenLoader } from '@shared/ui/fullscreen-loader';
import { PageLayout } from '@shared/ui/page-layout';
import { invariant } from 'es-toolkit';
import { useParams } from 'react-router-dom';
import { AccountDetails } from '../account-details';

export const AccountLayout = () => {
	const { accountId, serviceId } = useParams();

	invariant(accountId, 'accountId is required');
	invariant(serviceId, 'serviceId is required');

	const account = useGetAccountById(accountId);
	const service = useGetServiceById(serviceId);

	const { decryptedPassword: password, isDecrypting } = useDecryptPassword(
		account.data?.data,
	);

	const accountWithPassword =
		account.data?.data && password
			? {
					id: account.data.data.id,
					username: account.data.data.username,
					comment: account.data.data.comment,
					createdAt: account.data.data.createdAt,
					updatedAt: account.data.data.updatedAt,
					serviceId: account.data.data.serviceId,
					password: password,
				}
			: undefined;

	return (
		<PageLayout>
			{(account.isLoading || service.isLoading || isDecrypting) && (
				<FullscreenLoader />
			)}
			{accountWithPassword && service.data?.data && (
				<AccountDetails
					data={{
						account: accountWithPassword,
						service: service.data.data,
					}}
				/>
			)}
		</PageLayout>
	);
};
