import {
	Divider,
	InputAdornment,
	TextField,
	type TextFieldProps,
} from '@mui/material';
import * as React from 'react';

type BaseTextFieldProps = Omit<
	TextFieldProps,
	'variant' | 'size' | 'fullWidth'
> & {
	beforeInput?: React.ReactNode;
};

export const BaseTextField: React.FC<BaseTextFieldProps> = ({
	sx,
	slotProps,
	beforeInput,
	...props
}) => {
	return (
		<TextField
			{...props}
			variant='outlined'
			size='small'
			fullWidth
			sx={{
				backgroundColor: 'common.white',
				borderRadius: '8px',
				'& .MuiInputBase-root': {
					paddingLeft: '7px', //
				},
				'& .MuiOutlinedInput-notchedOutline': {
					border: 'none',
				},
			}}
			slotProps={{
				...slotProps,
				input: {
					...slotProps?.input,
					startAdornment: (
						<InputAdornment position='start' sx={{ gap: 1 }}>
							{beforeInput && (
								<>
									{beforeInput}
									<Divider orientation='vertical' flexItem />
								</>
							)}
						</InputAdornment>
					),
				},
			}}
		/>
	);
};
