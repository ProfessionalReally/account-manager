import type { Service } from '@shared/lib/types/service.ts';
import type { FC } from 'react';

import { useDeleteService } from '@entities/service/api/use-delete-service';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
	Avatar,
	Box,
	Grid,
	IconButton,
	Link,
	Paper,
	styled,
	Typography,
} from '@mui/material';
import { EDIT } from '@shared/config/form-actions/form-actions';
import { ROUTE_PATH } from '@shared/config/router/routes';
import { getRelativeTime } from '@shared/lib/dayjs/get-relative-time/get-relative-time';
import { AppDialog } from '@shared/ui/app-dialog';
import { useDialogs } from '@toolpad/core/useDialogs';
import { generatePath, useNavigate } from 'react-router-dom';

import { ServiceModal } from '../service-modal';

const StyledServiceCard = styled(Paper)(({ theme }) => ({
	background: '#444e83',
	borderRadius: '0 12px 12px 0',
	display: 'flex',
	gap: theme.spacing(2),
	height: '100%',
	padding: theme.spacing(2),
}));

const StyledModeEditIcon = styled(ModeEditIcon)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
}));

const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
}));

const StyledAvatar = styled(Avatar)(() => ({
	height: 50,
	minWidth: 50,
}));

const StyledLink = styled(Link)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
}));

const ActionsContainer = styled(Box)(() => ({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
}));

type AccountCardProps = {
	color?: string;
	service: Service;
};

export const AccountCard: FC<AccountCardProps> = ({ color, service }) => {
	const { description, icon, id, name, updatedAt } = service;
	const navigate = useNavigate();

	const dialog = useDialogs();

	const deleteService = useDeleteService();

	const onDelete = () => deleteService.mutate(id);

	return (
		<Grid size={{ md: 6, sm: 12 }} sx={{ height: 140 }}>
			<StyledServiceCard
				onClick={(e) => {
					const target = e.target as HTMLElement;

					if (target.closest('button') || target.closest('a')) {
						return;
					}

					navigate(
						generatePath(ROUTE_PATH.ACCOUNTS, {
							serviceId: id,
						}),
					);
				}}
				sx={{ borderLeft: `4px solid ${color}`, cursor: 'pointer' }}
			>
				<Box sx={{ alignItems: 'center', display: 'flex' }}>
					<StyledAvatar alt='name' src={icon} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexGrow: 1,
						justifyContent: 'space-between',
						minWidth: 0,
					}}
				>
					<Box
						sx={{
							alignItems: 'center',
							display: 'flex',
							gap: 2,
						}}
					>
						<Typography
							color='info'
							component='h4'
							sx={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							}}
							variant='subtitle1'
						>
							{name}
						</Typography>
						<StyledLink
							href={service.url}
							rel='noopener noreferrer'
							sx={{ display: 'inline-block' }}
							target='_blank'
							underline='hover'
						>
							<OpenInNewIcon fontSize='small' />
						</StyledLink>
					</Box>

					<Box sx={{ flex: 1 }}>
						<Typography
							component='p'
							sx={{
								color: 'primary.contrastText',
								display: '-webkit-box',
								overflow: 'hidden',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: 2,
							}}
							variant='body1'
						>
							{description}
						</Typography>
					</Box>
					<Typography
						color='textSecondary'
						component='p'
						sx={{
							color: 'primary.contrastText',
						}}
						variant='body2'
					>
						{updatedAt && getRelativeTime(updatedAt)}
					</Typography>
				</Box>
				<ActionsContainer>
					<IconButton
						onClick={() =>
							dialog.open(ServiceModal, { action: EDIT, id })
						}
					>
						<StyledModeEditIcon />
					</IconButton>
					<IconButton
						onClick={async () => {
							dialog.open(AppDialog, {
								body: 'Are you sure you want to delete this service?',
								header: 'Delete service',
								onClickYes: onDelete,
							});
						}}
					>
						<StyledDeleteIcon />
					</IconButton>
				</ActionsContainer>
			</StyledServiceCard>
		</Grid>
	);
};
