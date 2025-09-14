import { z } from 'zod';

export const serviceValidationSchema = z.object({
	categoryId: z.string().min(1, 'Category is required'),
	description: z
		.string()
		.trim()
		.max(500, 'Description is too long')
		.optional(),
	icon: z.union([
		z
			.httpUrl('Invalid icon URL')
			.trim()
			.regex(/\.(png|jpg|jpeg|svg|webp)$/i, 'Icon must be an image URL')
			.optional(),
		z.literal(''),
	]),
	name: z
		.string()
		.trim()
		.min(2, 'Name must be at least 2 characters long')
		.max(100, 'Name is too long'),
	url: z.httpUrl('Invalid website URL').trim(),
});
