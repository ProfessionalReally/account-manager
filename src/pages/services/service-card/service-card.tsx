import type { Service } from '@shared/lib/types/service.ts';
import type { FC } from 'react';

import { useDeleteService } from '@entities/service/api/use-delete-service';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {
	Avatar,
	Box,
	Grid,
	IconButton,
	Paper,
	styled,
	Typography,
} from '@mui/material';
import { getRelativeTime } from '@shared/lib/dayjs/get-relative-time/get-relative-time';

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

const ActionsContainer = styled(Box)(() => ({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
}));

type ServiceCardProps = {
	color?: string;
	service: Service;
};

export const ServiceCard: FC<ServiceCardProps> = ({ color, service }) => {
	const { description, icon, id, name, updatedAt } = service;

	const deleteService = useDeleteService();

	const onDelete = () => deleteService.mutate(id);

	return (
		<Grid size={{ md: 6, sm: 12 }} sx={{ height: 140 }}>
			<StyledServiceCard sx={{ borderLeft: `4px solid ${color}` }}>
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
						{getRelativeTime(updatedAt)}
					</Typography>
				</Box>
				<ActionsContainer>
					<IconButton>
						<StyledModeEditIcon />
					</IconButton>
					<IconButton onClick={onDelete}>
						<StyledDeleteIcon />
					</IconButton>
				</ActionsContainer>
			</StyledServiceCard>
		</Grid>
	);
};
