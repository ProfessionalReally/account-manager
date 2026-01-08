import type { Category } from './category';

export type Service = {
	category: Category;
	description?: string;
	icon?: string;
	id: string;
	name: string;
	updatedAt?: string;
	url: string;
};
