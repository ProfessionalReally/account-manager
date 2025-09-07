import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import LabelImportantOutlineRoundedIcon from '@mui/icons-material/LabelImportantOutlineRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { Stack } from '@mui/material';
import { BaseTextField } from '@shared/ui/base-text-field';
import { Combobox } from '@shared/ui/combobox';

export const ServiceForm = () => {
	return (
		<Stack component={'form'} gap={2}>
			<BaseTextField
				beforeInput={<LanguageIcon />}
				placeholder='Website'
			/>
			<BaseTextField
				beforeInput={<LabelImportantOutlineRoundedIcon />}
				placeholder='Service Name'
			/>
			<BaseTextField
				beforeInput={<ImageRoundedIcon />}
				placeholder='Icon URL'
			/>
			<Combobox
				options={[
					{ id: '1', label: 'Option 1' },
					{ id: '2', label: 'Option 2' },
				]}
			/>
		</Stack>
	);
};
