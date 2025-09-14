export type Service = {
	categoryId: string;
	description?: string;
	icon?: string;
	id: string;
	name: string;
	updatedAt?: string;
	url: string;
};

export type ServiceFormData = Omit<Service, 'id' | 'updatedAt'>;
