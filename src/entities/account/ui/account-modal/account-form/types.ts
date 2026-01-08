import type { Account } from '@shared/lib/types/account';

export type AccountFormData = Omit<Account, 'id' | 'serviceId' | 'updatedAt'>;
