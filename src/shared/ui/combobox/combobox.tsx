import type { OptionType } from '@shared/lib/types/option-types.ts';

import {
	Autocomplete,
	type AutocompleteProps,
	styled,
	TextField,
} from '@mui/material';

type ComboboxProps<T> = Omit<
	AutocompleteProps<T, false, false, false>,
	'renderInput'
> & {
	options: OptionType[];
};

const StyledTextField = styled(TextField)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
		backgroundColor: theme.palette.common.white,
		borderRadius: 8,
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
					color='secondary'
					placeholder='Category'
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
							// hover
							'&:hover': {
								bgcolor: 'primary.light',
							},
							// selected
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
