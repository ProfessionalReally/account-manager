import type { OptionType } from '@shared/lib/types/option-types';

import {
	Autocomplete,
	type AutocompleteProps,
	styled,
	TextField,
	type TextFieldProps,
} from '@mui/material';

type ComboboxProps = Omit<
	AutocompleteProps<OptionType, false, false, false>,
	'renderInput'
> &
	Pick<
		TextFieldProps,
		'error' | 'helperText' | 'label' | 'placeholder' | 'required'
	> & {
		options: OptionType[];
	};

const StyledTextField = styled(TextField)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
		backgroundColor: theme.palette.common.white,
		borderRadius: 8,
	},
}));

export function Combobox({
	error,
	helperText,
	label,
	loading = false,
	options,
	placeholder,
	required,
	...props
}: ComboboxProps) {
	return (
		<Autocomplete
			{...props}
			loading={loading}
			options={options}
			isOptionEqualToValue={(option, value) => option.id === value.id}
			noOptionsText='No data'
			loadingText='Loading...'
			renderInput={(params) => (
				<StyledTextField
					{...params}
					color='secondary'
					error={error}
					helperText={helperText}
					label={label}
					placeholder={placeholder}
					required={required}
					size='small'
				/>
			)}
			slotProps={{
				popper: {
					sx: {
						'& .MuiAutocomplete-listbox': {
							backgroundColor: 'common.white',
						},
						'& .MuiAutocomplete-option': {
							'&:hover': {
								bgcolor: 'primary.light',
							},
							'&[aria-selected="true"]': {
								bgcolor: 'grey.100',
							},
						},
					},
				},
			}}
		/>
	);
}
