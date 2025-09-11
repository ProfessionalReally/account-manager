import { z } from 'zod';

export const serviceValidationSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Name must be at least 2 characters long')
		.max(100, 'Name is too long'),
	description: z
		.string()
		.trim()
		.max(500, 'Description is too long')
		.optional(),
	icon: z
		.httpUrl('Invalid icon URL')
		.regex(/\.(png|jpg|jpeg|svg|webp)$/i, 'Icon must be an image URL')
		.optional(),
	url: z.httpUrl('Invalid website URL'),
	categoryId: z.string().nonempty('Category is required'),
});
