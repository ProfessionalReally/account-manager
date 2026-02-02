import { invariant } from 'es-toolkit';
import { useCallback, useMemo, useState, type PropsWithChildren } from 'react';
import { MASTER_KEY_CHECK_VALUE } from '../crypto/constants';
import { decrypt } from '../crypto/decrypt';
import { deriveKey } from '../crypto/derive-key';
import type { User } from '../types/user';
import { MasterKeyContext } from './master-key-context';
import type { KeyCheck } from './types';

export const MasterKeyProvider: React.FC<
	PropsWithChildren<{
		user: Pick<User, 'masterKeySalt' | 'keyCheck'>;
	}>
> = ({ user, children }) => {
	invariant(user, 'user is required');

	const [key, setKey] = useState<CryptoKey>();
	const [unlocked, setUnlocked] = useState(false);

	const isFirstTime = useMemo(
		() =>
			!(
				user.masterKeySalt?.length &&
				user.keyCheck?.cipherText &&
				user.keyCheck?.iv?.length
			),
		[user],
	);

	const unlockMasterKey = useCallback(
		async (masterKey: string, salt: number[], keyCheck: KeyCheck) => {
			const derivedKey = await deriveKey(masterKey, new Uint8Array(salt));
			const decrypted = await decrypt(
				keyCheck.cipherText,
				keyCheck.iv,
				derivedKey,
			);

			invariant(
				decrypted === MASTER_KEY_CHECK_VALUE,
				'Invalid master key',
			);

			setKey(derivedKey);
			setUnlocked(true);

			return derivedKey;
		},
		[],
	);

	const setKeyDirectly = useCallback((derivedKey: CryptoKey) => {
		setKey(derivedKey);
		setUnlocked(true);
	}, []);

	const value = useMemo(
		() => ({
			unlocked,
			key,
			isFirstTime,
			unlockMasterKey,
			setKeyDirectly,
		}),
		[unlocked, key, isFirstTime, unlockMasterKey, setKeyDirectly],
	);

	return <MasterKeyContext value={value}>{children}</MasterKeyContext>;
};
