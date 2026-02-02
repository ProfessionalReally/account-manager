export type KeyCheck = {
	cipherText: string;
	iv: number[];
};

export type MasterKeyContextValue = {
	unlocked: boolean;
	key?: CryptoKey;
	isFirstTime: boolean;
	unlockMasterKey: (
		masterKey: string,
		salt: number[],
		keyCheck: KeyCheck,
	) => Promise<CryptoKey>;
	setKeyDirectly: (key: CryptoKey) => void;
};
