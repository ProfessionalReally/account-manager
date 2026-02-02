import { useCurrentUser } from '@entities/user/api/use-current-user';
import { useMasterKey, type KeyCheck } from '@shared/lib/master-key-context';
import { useDialogs } from '@toolpad/core/useDialogs';
import { MasterKeyModal } from './master-key-modal';

export const useRequireMasterKey = () => {
	const { unlocked, unlockMasterKey, setKeyDirectly, key } = useMasterKey();
	const dialogs = useDialogs();

	const { data, isLoading } = useCurrentUser();

	return () =>
		new Promise<CryptoKey>((resolve, reject) => {
			if (key && unlocked) {
				resolve(key);
				return;
			}

			if (isLoading) {
				reject(new Error('User is loading'));
				return;
			}

			const user = data?.data;
			if (!user) {
				reject(new Error('User not loaded'));
				return;
			}

			dialogs.open(MasterKeyModal, {
				action: user.masterKeySalt?.length ? 'UNLOCK' : 'CREATE',
				user: user.masterKeySalt?.length
					? {
							masterKeySalt: user.masterKeySalt,
							keyCheck: user.keyCheck,
						}
					: undefined,
				onUnlock: async (
					masterKey: string,
					salt: number[],
					keyCheck: KeyCheck,
				) => {
					const derivedKey = await unlockMasterKey(
						masterKey,
						salt,
						keyCheck,
					);
					resolve(derivedKey);
				},
				onSetKey: (derivedKey) => {
					setKeyDirectly(derivedKey);
					resolve(derivedKey);
				},
			});
		});
};
