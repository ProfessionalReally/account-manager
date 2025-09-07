import {
	Divider,
	InputAdornment,
	styled,
	TextField,
	type TextFieldProps,
} from '@mui/material';
import * as React from 'react';

type BaseTextFieldProps = Omit<
	TextFieldProps,
	'fullWidth' | 'size' | 'variant'
> & {
	beforeInput?: React.ReactNode;
};

// TODO: Исправить стили
const StyledTextField = styled(TextField)(({ theme }) => ({
	'&.Mui-disabled': {
		backgroundColor: theme.palette.action.disabledBackground,
	},
	'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: theme.palette.secondary.main,
		borderWidth: 2,
	},
	'& .MuiInputBase-root': {
		borderRadius: 8,
		paddingLeft: 7,
	},

	'& .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #ccc', // базовая рамка
		transition: 'border-color 0.2s',
	},

	'&:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: theme.palette.primary.main,
	},

	backgroundColor: theme.palette.common.white,

	borderRadius: 8,

	width: '100%',
}));

export const BaseTextField: React.FC<BaseTextFieldProps> = ({
	beforeInput,
	slotProps,
	...props
}) => {
	return (
		<StyledTextField
			{...props}
			fullWidth
			size='small'
			slotProps={{
				...slotProps,
				input: {
					...slotProps?.input,
					startAdornment: (
						<InputAdornment position='start' sx={{ gap: 1 }}>
							{beforeInput && (
								<>
									{beforeInput}
									<Divider flexItem orientation='vertical' />
								</>
							)}
						</InputAdornment>
					),
				},
			}}
			// sx={{
			// 	...sx,
			// 	'& .MuiInputBase-root': {
			// 		paddingLeft: '7px', //
			// 	},
			// 	'& .MuiOutlinedInput-notchedOutline': {
			// 		border: 'none',
			// 	},
			// 	backgroundColor: 'common.white',
			// 	borderRadius: '8px',
			// }}
			variant='outlined'
		/>
	);
};
