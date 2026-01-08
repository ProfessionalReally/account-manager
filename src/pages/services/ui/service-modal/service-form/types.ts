import type { Service } from '@shared/lib/types/service';

export type FormData = Omit<
	Service,
	'id' | 'updatedAt' | 'createdAt' | 'category'
> & {
	category: {
		id: string;
	};
};
