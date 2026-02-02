import type { Account } from '@shared/lib/types/account';

export type AccountFormData = Pick<
	Account,
	'comment' | 'username' | 'serviceId' | 'cipherText' | 'iv'
>;
