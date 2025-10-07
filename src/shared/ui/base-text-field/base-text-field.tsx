import {
	InputAdornment,
	styled,
	TextField,
	type TextFieldProps,
} from '@mui/material';
import * as React from 'react';

export type BaseTextFieldProps = Omit<
	TextFieldProps,
	'fullWidth' | 'size' | 'variant'
> & {
	afterInput?: React.ReactNode;
};

const StyledTextField = styled(TextField)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
		backgroundColor: theme.palette.common.white,
		borderRadius: 8,
		// paddingLeft: 7,
	},
}));

export const BaseTextField: React.FC<BaseTextFieldProps> = ({
	afterInput,
	slotProps,
	...props
}) => {
	return (
		<StyledTextField
			{...props}
			color='secondary'
			fullWidth
			size='small'
			slotProps={{
				...slotProps,
				input: {
					...slotProps?.input,
					endAdornment: afterInput && (
						<InputAdornment position='start'>
							{afterInput}
						</InputAdornment>
					),
				},
			}}
			variant='outlined'
		/>
	);
};
