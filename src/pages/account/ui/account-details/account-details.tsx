import { useDeleteAccount } from '@entities/account/api/use-delete-account';
import { AccountModal } from '@entities/account/ui/account-modal';
import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import { useMasterKey } from '@shared/lib/master-key-context';
import type { Account } from '@shared/lib/types/account';
import type { Service } from '@shared/lib/types/service';
import { AppDialog } from '@shared/ui/app-dialog';
import { BaseTextField } from '@shared/ui/base-text-field';
import { CopyButton } from '@shared/ui/copy-button';
import { BasePasswordField } from '@shared/ui/password-field';
import { useDialogs } from '@toolpad/core/useDialogs';
import dayjs from 'dayjs';
import { invariant } from 'es-toolkit';
import type React from 'react';
import { useNavigate } from 'react-router-dom';

type AccountDetails = {
	data: {
		account: Omit<Account, 'cipherText' | 'iv'> & { password: string };
		service: Service;
	};
};

export const AccountDetails: React.FC<AccountDetails> = ({
	data: { account, service },
}) => {
	const { key } = useMasterKey();

	invariant(key, 'Master key is required');

	const dialogs = useDialogs();
	const navigate = useNavigate();

	const deleteAccount = useDeleteAccount();

	const onDelete = async () => {
		dialogs.open(
			AppDialog,
			{
				body: 'Are you sure you want to delete this account?',
				header: 'Delete account',
				onClickYes: () => deleteAccount.mutate(account.id),
			},
			{
				onClose: async () => {
					navigate(-1);
				},
			},
		);
	};

	const onEdit = async () => {
		// const key = await requireMasterKey();
		dialogs.open(AccountModal, {
			id: account.id,
			action: 'EDIT',
			masterKey: key,
			serviceId: account.serviceId,
		});
	};

	return (
		<Stack
			flexDirection={'column'}
			justifyContent={'space-between'}
			height={'100%'}
			gap={2}
		>
			<Typography
				component={'h3'}
				sx={{
					color: 'primary.contrastText',
				}}
				variant={'h5'}
			>
				Account
			</Typography>
			<Grid container spacing={4}>
				<Grid
					size={{ xs: 12, md: 6 }}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<BaseTextField
						name='username'
						label='Username'
						type='text'
						slotProps={{
							input: {
								readOnly: true,
							},
						}}
						afterInput={<CopyButton value={account.username} />}
						value={account.username}
					/>
					<BasePasswordField
						name='password'
						label='Password'
						slotProps={{
							input: {
								readOnly: true,
							},
						}}
						afterInput={<CopyButton value={account.password} />}
						value={account.password}
					/>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<BaseTextField
						name='comment'
						value={account.comment}
						label='Comment'
						type='text'
						multiline
						rows={4}
						slotProps={{
							input: {
								readOnly: true,
							},
						}}
					/>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<Typography
						component={'h5'}
						sx={{
							color: 'primary.contrastText',
						}}
						variant={'h6'}
					>
						Last updated:{' '}
						{dayjs(account.updatedAt).format('DD.MM.YYYY HH:mm')}
					</Typography>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<Typography
						component={'h5'}
						sx={{
							color: 'primary.contrastText',
						}}
						variant={'h6'}
					>
						Created at:{' '}
						{dayjs(account.createdAt).format('DD.MM.YYYY HH:mm')}
					</Typography>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<Typography
						component={'h5'}
						sx={{
							color: 'primary.contrastText',
						}}
						variant={'h6'}
					>
						URL Site:{' '}
						<Link
							href={service.url}
							target='_blank'
							rel='noopener noreferrer'
							sx={{
								'&:hover': {
									textDecoration: 'underline',
								},
								color: 'info.main',

								textDecoration: 'none',
							}}
							variant={'h6'}
						>
							{service.url}
						</Link>
					</Typography>
				</Grid>
			</Grid>
			<Stack
				direction={'row'}
				gap={2}
				justifyContent={'flex-end'}
				width={'100%'}
				sx={{ mt: 2 }}
			>
				<Button variant='contained' onClick={onEdit}>
					Edit
				</Button>
				<Button
					color='error'
					type='button'
					variant='contained'
					onClick={onDelete}
				>
					Delete
				</Button>
			</Stack>
		</Stack>
	);
};
