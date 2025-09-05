import {
	Avatar,
	Box,
	Grid,
	IconButton,
	Paper,
	styled,
	Typography,
} from '@mui/material';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Service } from '@shared/lib/types/service.ts';
import type { FC } from 'react';

const StyledServiceCard = styled(Paper)(({ theme }) => ({
	background: '#444e83',
	borderRadius: 12,
	padding: theme.spacing(2),
	display: 'flex',
	gap: theme.spacing(2),
	height: '100%',
}));

const StyledModeEditIcon = styled(ModeEditIcon)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
}));

const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
}));

const StyledAvatar = styled(Avatar)(() => ({
	minWidth: 50,
	height: 50,
}));

const ActionsContainer = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	justifyContent: 'space-between',
}));

type ServiceCardProps = {
	service: Service;
};

export const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
	const { name, description, icon, updatedAt } = service;
	return (
		<Grid size={{ sm: 12, md: 6 }} sx={{ height: 140 }}>
			<StyledServiceCard>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<StyledAvatar alt='name' src={icon} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexGrow: 1,
						justifyContent: 'space-between',
					}}
				>
					{/*TODO: Поправить перенос при переполнении*/}
					<Typography
						variant='subtitle1'
						component='h4'
						color='info'
						sx={{
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
						}}
					>
						{name}
					</Typography>
					<Box sx={{ flex: 1 }}>
						<Typography
							variant='body1'
							component='p'
							sx={{
								color: 'primary.contrastText',
								display: '-webkit-box',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: 2,
								overflow: 'hidden',
							}}
						>
							{description}
						</Typography>
					</Box>
					<Typography
						variant='body2'
						component='p'
						color='textSecondary'
					>
						{updatedAt}
					</Typography>
				</Box>
				<ActionsContainer>
					<IconButton>
						<StyledModeEditIcon />
					</IconButton>
					<IconButton>
						<StyledDeleteIcon />
					</IconButton>
				</ActionsContainer>
			</StyledServiceCard>
		</Grid>
	);
};
