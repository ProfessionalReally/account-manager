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

const StyledTextField = styled(TextField)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
		backgroundColor: theme.palette.common.white,
		borderRadius: 8,
		paddingLeft: 7,
	},
}));

export const BaseTextField: React.FC<BaseTextFieldProps> = ({
	beforeInput,
	slotProps,
	...props
}) => {
	return (
		<StyledTextField
			{...props}
			color='secondary'
			fullWidth
			hiddenLabel
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
			variant='outlined'
		/>
	);
};
