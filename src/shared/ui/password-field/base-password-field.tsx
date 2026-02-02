import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { BaseTextField, type BaseTextFieldProps } from '../base-text-field';

export type BasePasswordFieldProps = Omit<BaseTextFieldProps, 'type'>;

export const BasePasswordField: React.FC<BasePasswordFieldProps> = ({
	afterInput,
	...props
}) => {
	const [visibility, setVisibility] = useState(false);

	return (
		<BaseTextField
			{...props}
			afterInput={
				<>
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
					{afterInput}
				</>
			}
			sx={{
				'.MuiInputAdornment-root': {
					marginRight: 0.5,
				},
				...props.sx,
			}}
			type={visibility ? 'text' : 'password'}
		/>
	);
};
