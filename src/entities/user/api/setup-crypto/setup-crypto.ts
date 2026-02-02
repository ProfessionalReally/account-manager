import { api } from '@shared/api/axios';
import type { User } from '@shared/lib/types/user';

export const setupCrypto = async ({
	keyCheck,
	masterKeySalt,
}: {
	keyCheck: NonNullable<User['keyCheck']>;
	masterKeySalt: NonNullable<User['masterKeySalt']>;
}) => {
	await api.patch('/user/setup-crypto', { keyCheck, masterKeySalt });
};
