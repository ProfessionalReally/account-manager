import type { ApiResponse } from '@shared/api/types';
import { decrypt } from '@shared/lib/crypto/decrypt';
import type { Account } from '@shared/lib/types/account';
import { useQuery } from '@tanstack/react-query';
import { invariant } from 'es-toolkit';
import { fetchAccountById } from '../fetch-account-by-id';

export const useGetAccountByIdDecrypted = (
	id: string | undefined,
	masterKey: CryptoKey,
) => {
	return useQuery({
		queryKey: ['account', id, 'decrypted'],
		enabled: Boolean(id),
		queryFn: async () => {
			const response: ApiResponse<Account> = await fetchAccountById(id);
			const account = response.data;

			invariant(account, 'Account not found');

			const password = await decrypt(
				account.cipherText,
				account.iv,
				masterKey,
			);

			const { cipherText, iv, ...rest } = account;

			return {
				...rest,
				password,
			};
		},
	});
};
