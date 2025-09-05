import {
	Autocomplete,
	type AutocompleteProps,
	styled,
	TextField,
} from '@mui/material';

type OptionType = {
	label: string;
	id: string;
};

type ComboboxProps<T> = Omit<
	AutocompleteProps<T, false, false, false>,
	'renderInput'
> & {
	options: OptionType[];
};

const StyledTextField = styled(TextField)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
		borderRadius: 8,
		'& fieldset': {
			borderColor: theme.palette.grey[400],
			borderWidth: 1.5,
		},
		'&:hover fieldset': {
			borderColor: theme.palette.primary.main,
		},
		'&.Mui-focused fieldset': {
			borderColor: theme.palette.primary.main,
			borderWidth: 2,
		},
	},
}));

export function Combobox<T>({ options, ...props }: ComboboxProps<T>) {
	return (
		<Autocomplete
			{...props}
			options={options}
			renderInput={(params) => (
				<StyledTextField
					{...params}
					placeholder='Category'
					size='small'
				/>
			)}
		/>
	);
}
