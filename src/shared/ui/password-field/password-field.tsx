import {
	Controller,
	type Control,
	type FieldErrors,
	type FieldValues,
	type Path,
} from 'react-hook-form';

import { type BaseTextFieldProps } from '../base-text-field';
import { BasePasswordField } from './base-password-field';

type PasswordFieldProps<T extends FieldValues> = Omit<
	BaseTextFieldProps,
	'name'
> & {
	errors: FieldErrors<T>;
	name: Path<T>;
	control: Control<T>;
};

export const PasswordField = <T extends FieldValues>({
	errors,
	name,
	control,
	...props
}: PasswordFieldProps<T>) => {
	const fieldError = errors[name];

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<BasePasswordField
					{...props}
					{...field}
					error={!!fieldError}
					helperText={
						typeof fieldError?.message === 'string'
							? fieldError.message
							: undefined
					}
				/>
			)}
		/>
	);
};
