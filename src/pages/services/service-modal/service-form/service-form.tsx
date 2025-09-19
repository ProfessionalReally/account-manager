import type { Service, ServiceFormData } from '@shared/lib/types/service';

import { useGetCategoryOptions } from '@entities/category/api/use-get-category-options';
import { useCreateService } from '@entities/service/api/use-create-service';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { useInitialValues } from './use-initial-values';
import { useOnSubmit } from './use-on-submit';

export const ServiceForm = ({ data }: { data?: Service }) => {
	const { onClose } = useModal();

	const onSubmit = useOnSubmit();
	const defaultValues = useInitialValues(data);

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<ServiceFormData>({
		defaultValues,
		resolver: zodResolver(serviceValidationSchema),
	});

	const categoryOptions = useGetCategoryOptions();
	const createService = useCreateService();

	invariant(
		categoryOptions.data || categoryOptions.isLoading,
		'Category options is not loaded',
	);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
		>
			<BaseTextField
				beforeInput={<LanguageIcon />}
				placeholder='Website'
				{...register('url')}
				error={!!errors.url}
				helperText={errors.url?.message}
			/>
			<BaseTextField
				beforeInput={<LabelImportantOutlineRoundedIcon />}
				placeholder='Service Name'
				{...register('name')}
				error={!!errors.name}
				helperText={errors.name?.message}
			/>
			<BaseTextField
				multiline
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
				render={({ field, fieldState }) => (
					<Combobox
						error={!!fieldState.error}
						helperText={fieldState.error?.message}
						loading={categoryOptions.isLoading}
						onChange={(_, newValue) =>
							field.onChange(newValue?.id ?? '')
						}
						options={categoryOptions.data ?? []}
						value={
							categoryOptions.data?.find(
								(opt) => opt.id === field.value,
							) ?? { id: '', label: '' }
						}
					/>
				)}
			/>
			<Stack
				direction={'row'}
				gap={2}
				justifyContent={'flex-end'}
				sx={{ mt: 2 }}
			>
				<Button
					disabled={createService.isPending}
					type='submit'
					variant='contained'
				>
					{createService.isPending ? (
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
