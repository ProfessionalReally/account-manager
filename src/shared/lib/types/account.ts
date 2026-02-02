export type Account = {
	id: string;
	username: string;
	comment?: string;
	cipherText: string;
	iv: number[];
	createdAt: string;
	updatedAt: string;
	serviceId: string;
};
