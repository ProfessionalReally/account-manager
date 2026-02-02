import { z } from 'zod';

export const accountValidationSchema = z.object({
	comment: z.string().trim().max(500, 'Description is too long').optional(),
	username: z
		.string()
		.trim()
		.min(2, 'Name must be at least 2 characters long')
		.max(100, 'Name is too long'),
	password: z.string(),
});
