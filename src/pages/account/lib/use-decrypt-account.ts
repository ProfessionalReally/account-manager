import { useRequireMasterKey } from '@entities/user';
import { decrypt } from '@shared/lib/crypto/decrypt';
import type { Account } from '@shared/lib/types/account';
import { useEffect, useRef, useState } from 'react';

export const useDecryptPassword = (account?: Account) => {
	const requireMasterKey = useRequireMasterKey();
	const [decryptedPassword, setDecryptedPassword] = useState<
		string | undefined
	>(undefined);
	const [isDecrypting, setIsDecrypting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const isDecryptingRef = useRef(false);

	useEffect(() => {
		const decryptPasswordAsync = async () => {
			if (!account || isDecryptingRef.current) {
				return;
			}

			isDecryptingRef.current = true;
			setIsDecrypting(true);
			setError(null);

			try {
				const masterKey = await requireMasterKey();

				if (!masterKey) {
					throw new Error('Master key is required for decryption');
				}

				const decrypted = await decrypt(
					account.cipherText,
					account.iv,
					masterKey,
				);

				setDecryptedPassword(decrypted);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'Decryption failed',
				);
				setDecryptedPassword(undefined);
			} finally {
				setIsDecrypting(false);
				isDecryptingRef.current = false;
			}
		};

		decryptPasswordAsync();
	}, [account?.id, account?.cipherText, account?.iv]);

	return { decryptedPassword, isDecrypting, error };
};
