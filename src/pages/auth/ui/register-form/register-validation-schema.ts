import { z } from 'zod';

export const registerValidationSchema = z
	.object({
		confirmPassword: z.string().min(1, 'Confirm password is required'),
		email: z.email('Invalid email').min(1, 'Email is required'),
		password: z.string().min(1, 'Password is required'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: 'Passwords do not match',
		path: ['confirmPassword'],
	});

export type RegisterFormData = z.infer<typeof registerValidationSchema>;
