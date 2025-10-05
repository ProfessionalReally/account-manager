export type Account = {
	comment: string;
	email: string;
	id: string;
	login: string;
	name: string;
	password: string;
	phone: string;
	serviceId: string;
	updatedAt?: string;
};

export type AccountFormData = Omit<Account, 'id' | 'serviceId' | 'updatedAt'>;
