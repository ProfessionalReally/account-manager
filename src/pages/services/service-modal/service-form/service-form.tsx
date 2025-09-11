import { useGetCategoryOptions } from '@entities/category/api/use-get-category-options';
import { zodResolver } from '@hookform/resolvers/zod';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import LabelImportantOutlineRoundedIcon from '@mui/icons-material/LabelImportantOutlineRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Stack } from '@mui/material';
import { useModal } from '@shared/ui/app-modal';
import { BaseTextField } from '@shared/ui/base-text-field';
import { Combobox } from '@shared/ui/combobox';
import { invariant } from 'es-toolkit';
import { Controller, useForm } from 'react-hook-form';

import { serviceValidationSchema } from './service-validation-schema';

const defaultValues = {
	categoryId: '',
	description: '',
	icon: '',
	name: '',
	url: '',
};

export const ServiceForm = () => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = useForm({
		defaultValues,
		resolver: zodResolver(serviceValidationSchema),
	});

	const { handleClose } = useModal();
	const categoryOptions = useGetCategoryOptions();

	invariant(
		categoryOptions.data || categoryOptions.isLoading,
		'Category options is not loaded',
	);

	return (
		<Stack component={'form'} gap={2} onSubmit={handleSubmit(() => {})}>
			<BaseTextField
				beforeInput={<LanguageIcon />}
				placeholder='Website'
				{...register('name')}
				error={!!errors.name}
				helperText={errors.name?.message}
			/>
			<BaseTextField
				beforeInput={<LabelImportantOutlineRoundedIcon />}
				placeholder='Service Name'
				{...register('url')}
				error={!!errors.url}
				helperText={errors.url?.message}
			/>
			<BaseTextField
				multiline={true}
				placeholder='Description'
				{...register('description')}
				error={!!errors.description}
				helperText={errors.description?.message}
				rows={4}
			/>
			<BaseTextField
				beforeInput={<ImageRoundedIcon />}
				{...register('icon')}
				error={!!errors.icon}
				helperText={errors.icon?.message}
				placeholder='Icon URL'
			/>
			<Controller
				control={control}
				name='categoryId'
				render={({ field }) => (
					<Combobox
						loading={categoryOptions.isLoading}
						onChange={field.onChange}
						options={categoryOptions.data}
					/>
				)}
			/>
			{/*<Combobox*/}
			{/*	options={[*/}
			{/*		{ id: '1', label: 'Option 1' },*/}
			{/*		{ id: '2', label: 'Option 2' },*/}
			{/*	]}*/}
			{/*/>*/}
			<Stack
				direction={'row'}
				gap={2}
				justifyContent={'flex-end'}
				sx={{ mt: 2 }}
			>
				<Button type='submit' variant='contained'>
					Save
				</Button>
				<Button
					color='error'
					onClick={handleClose}
					type='button'
					variant='contained'
				>
					Cancel
				</Button>
			</Stack>
		</Stack>
	);
};
