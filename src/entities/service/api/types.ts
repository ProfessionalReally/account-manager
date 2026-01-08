import type { Service } from '@shared/lib/types/service';

export type ServiceFormData = Omit<Service, 'id' | 'updatedAt'>;
