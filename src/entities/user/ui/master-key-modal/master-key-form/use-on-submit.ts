import { setupCrypto } from '@entities/user';
import { MASTER_KEY_CHECK_VALUE } from '@shared/lib/crypto/constants';
import { deriveKey } from '@shared/lib/crypto/derive-key';
import { encrypt } from '@shared/lib/crypto/encrypt';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { invariant } from 'es-toolkit';
import type { UseFormSetError } from 'react-hook-form';
import type { MasterKeyFormData, MasterKeyPayload } from './types';

export const useOnSubmit = (setError: UseFormSetError<MasterKeyFormData>) => {
	const { onClose, payload } = useModal<MasterKeyPayload>();

	return async (data: MasterKeyFormData) => {
		try {
			switch (payload.action) {
				case 'CREATE':
					const salt = crypto.getRandomValues(new Uint8Array(16));
					const derivedKey = await deriveKey(data.masterKey, salt);

					const keyCheck = await encrypt(
						MASTER_KEY_CHECK_VALUE,
						derivedKey,
					);

					await setupCrypto({
						masterKeySalt: Array.from(salt),
						keyCheck,
					});

					payload?.onSetKey(derivedKey);
					break;
				case 'UNLOCK':
					const user = payload.user;

					invariant(
						user?.keyCheck && user?.masterKeySalt,
						'User data is required to unlock the master key',
					);

					try {
						await payload.onUnlock(
							data.masterKey,
							user.masterKeySalt,
							user.keyCheck,
						);
					} catch (error) {
						throw new Error('Invalid master password');
					}
			}

			onClose();
		} catch (error) {
			setError('masterKey', {
				message: (error as Error).message,
			});
		}
	};
};
