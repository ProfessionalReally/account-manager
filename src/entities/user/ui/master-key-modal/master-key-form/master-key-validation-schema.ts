import { z } from 'zod';

export const masterKeyValidationSchema = z.object({
	masterKey: z.string(),
});
