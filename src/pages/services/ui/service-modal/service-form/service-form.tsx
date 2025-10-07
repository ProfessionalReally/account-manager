import type { Service } from '@shared/lib/types/service';

import { useGetCategoryOptions } from '@entities/category/api/use-get-category-options';
import { zodResolver } from '@hookform/resolvers/zod';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import LabelImportantOutlineRoundedIcon from '@mui/icons-material/LabelImportantOutlineRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, CircularProgress, Stack } from '@mui/material';
import { useModal } from '@shared/lib/modal-context/use-modal';
import { BaseTextField } from '@shared/ui/base-text-field';
import { Combobox } from '@shared/ui/combobox';
import { invariant } from 'es-toolkit';
import { Controller, useForm } from 'react-hook-form';

import { serviceValidationSchema } from './service-validation-schema';
import type { FormData } from './types';
import { useInitialValues } from './use-initial-values';
import { useOnSubmit } from './use-on-submit';

export const ServiceForm = ({ data }: { data?: Service }) => {
	const { onClose } = useModal();

	const onSubmit = useOnSubmit();
	const defaultValues = useInitialValues(data);

	const {
		control,
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		getValues,
	} = useForm<FormData>({
		defaultValues,
		resolver: zodResolver(serviceValidationSchema),
	});

	console.log(getValues());

	const categoryOptions = useGetCategoryOptions();

	invariant(
		categoryOptions.data || categoryOptions.isLoading,
		'Category options is not loaded',
	);

	console.log(categoryOptions);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
		>
			<Controller
				name='category.id'
				control={control}
				render={({ field, fieldState }) => {
					const value =
						categoryOptions.data?.find(
							(opt) => opt.id === field.value,
						) ?? null;

					return (
						<Combobox
							label='Category'
							loading={categoryOptions.isLoading}
							options={categoryOptions.data ?? []}
							value={value}
							onChange={(_, option) =>
								field.onChange(option?.id ?? '')
							}
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							placeholder='Select category'
							required
						/>
					);
				}}
			/>
			<BaseTextField
				afterInput={<LanguageIcon />}
				label='Website'
				placeholder='Enter website URL'
				{...register('url')}
				error={!!errors.url}
				helperText={errors.url?.message}
				required
			/>
			<BaseTextField
				afterInput={<LabelImportantOutlineRoundedIcon />}
				label='Name'
				placeholder='Enter service name'
				{...register('name')}
				error={!!errors.name}
				helperText={errors.name?.message}
				required
			/>

			<BaseTextField
				afterInput={<ImageRoundedIcon />}
				{...register('icon')}
				error={!!errors.icon}
				helperText={errors.icon?.message}
				label='Icon'
				placeholder='Enter icon URL'
			/>
			<BaseTextField
				label='Description'
				multiline
				placeholder='Enter service description'
				{...register('description')}
				afterInput={<CommentRoundedIcon />}
				error={!!errors.description}
				helperText={errors.description?.message}
				rows={4}
			/>
			<BaseTextField
				afterInput={<LanguageIcon />}
				label='Website'
				placeholder='Enter website URL'
				{...register('url')}
				error={!!errors.url}
				helperText={errors.url?.message}
				required
			/>
			<BaseTextField
				afterInput={<LabelImportantOutlineRoundedIcon />}
				label='Name'
				placeholder='Enter service name'
				{...register('name')}
				error={!!errors.name}
				helperText={errors.name?.message}
				required
			/>

			<BaseTextField
				afterInput={<ImageRoundedIcon />}
				{...register('icon')}
				error={!!errors.icon}
				helperText={errors.icon?.message}
				label='Icon'
				placeholder='Enter icon URL'
			/>
			<BaseTextField
				label='Description'
				multiline
				placeholder='Enter service description'
				{...register('description')}
				afterInput={<CommentRoundedIcon />}
				error={!!errors.description}
				helperText={errors.description?.message}
				rows={4}
			/>

			<Stack
				direction={'row'}
				gap={2}
				justifyContent={'flex-end'}
				sx={{ mt: 2 }}
			>
				<Button
					disabled={isSubmitting}
					type='submit'
					variant='contained'
				>
					{isSubmitting ? (
						<CircularProgress color='info' size={20} />
					) : (
						'Save'
					)}
				</Button>
				<Button
					color='error'
					onClick={() => onClose()}
					type='button'
					variant='contained'
				>
					Cancel
				</Button>
			</Stack>
		</form>
	);
};
