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

const emptyOptions: readonly OptionType[] = [{ id: '', label: 'No Data...' }];
const loadingOptions: readonly OptionType[] = [{ id: '', label: 'Loading...' }];

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
	const isEmpty = !options || options.length === 0 || !Array.isArray(options);

	let displayOptions: readonly OptionType[] = options;
	if (loading) {
		displayOptions = loadingOptions;
	} else if (isEmpty) {
		displayOptions = emptyOptions;
	}

	return (
		<Autocomplete
			{...props}
			loading={loading}
			options={displayOptions}
			renderInput={(params) => (
				<StyledTextField
					{...params}
					color='secondary'
					error={error}
					helperText={helperText}
					label={label}
					placeholder={placeholder}
					required
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
