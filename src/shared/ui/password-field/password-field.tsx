import type {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from 'react-hook-form';

import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { IconButton } from '@mui/material';
import { useState } from 'react';

import { BaseTextField, type BaseTextFieldProps } from '../base-text-field';

type PasswordFieldProps<T extends FieldValues> = Omit<
	BaseTextFieldProps,
	'name'
> & {
	errors: FieldErrors<T>;
	name: Path<T>;
	register: UseFormRegister<T>;
};

export const PasswordField = <T extends FieldValues>({
	errors,
	name,
	register,
	...props
}: PasswordFieldProps<T>) => {
	const [visibility, setVisibility] = useState(false);

	const fieldError = errors[name];
	const message =
		typeof fieldError?.message === 'string'
			? fieldError.message
			: undefined;

	return (
		<BaseTextField
			{...props}
			{...register(name)}
			afterInput={
				<IconButton
					onClick={() => setVisibility(!visibility)}
					size='small'
				>
					{visibility ? (
						<VisibilityOffRoundedIcon />
					) : (
						<VisibilityRoundedIcon />
					)}
				</IconButton>
			}
			error={!!errors.password}
			helperText={message}
			sx={{
				'.MuiInputAdornment-root': {
					marginRight: 0.5,
				},
			}}
			type={visibility ? 'text' : 'password'}
		/>
	);
};
