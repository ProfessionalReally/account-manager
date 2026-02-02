import type { MasterKeyContextValue } from '@shared/lib/master-key-context';
import type { User } from '@shared/lib/types/user';

export type MasterKeyFormData = {
	masterKey: string;
};

export type MasterKeyAction = 'UNLOCK' | 'CREATE';

export type MasterKeyPayload = {
	action: MasterKeyAction;
	user?: Pick<User, 'keyCheck' | 'masterKeySalt'>;
	onUnlock: MasterKeyContextValue['unlockMasterKey'];
	onSetKey: MasterKeyContextValue['setKeyDirectly'];
};
