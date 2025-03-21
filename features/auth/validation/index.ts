import { z } from 'zod'

export const LoginSchema = z.object({
	username: z
		.string({ message: 'Username wajib diisi' })
		.min(3, { message: 'Username minimal 3 karakter' }),
	email: z
		.string({ message: 'Email wajib diisi' })
		.email({ message: 'Format email tidak valid' }),
	password: z.string().min(1, { message: 'Password wajib diisi' }),
})

export const RegisterSchema = z
	.object({
		fullname: z
			.string({ message: 'Username wajib diisi' })
			.min(3, { message: 'Username minimal 3 karakter' }),
		email: z
			.string({ message: 'Email wajib diisi' })
			.email({ message: 'Format email tidak valid' }),
		password: z.string().min(1, { message: 'Password wajib diisi' }),
		confirmPassword: z.string().min(1, { message: 'Password wajib diisi' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Password dan konfirmasi password harus sama',
		path: ['confirmPassword'],
	})

export type LoginType = z.infer<typeof LoginSchema>
export type RegisterType = z.infer<typeof RegisterSchema>
