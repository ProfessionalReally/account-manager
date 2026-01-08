import { useLogout } from '@entities/auth';
import Logout from '@mui/icons-material/Logout';
import {
	Avatar,
	Box,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ROUTE_PATH } from '@shared/config/router/routes';
import type { User } from '@shared/lib/types/user';
import createColor from 'create-color';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flex: 1,
}));

const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	fontWeight: 'bold',
}));

const StyledAvatar = styled(Avatar)(() => ({
	width: 40,
	height: 40,
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
	'& .MuiPaper-root': {
		overflow: 'visible',
		marginTop: theme.spacing(1.5),
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.common.white,
		filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			right: 14,
			width: 10,
			height: 10,
			backgroundColor: theme.palette.common.white,
			transform: 'translateY(-50%) rotate(45deg)',
			zIndex: 0,
		},
	},
}));

const ProfileBox = styled(Box)(({ theme }) => ({
	padding: theme.spacing(1, 2),
	borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
	transition: 'background-color 0.2s',
	'&:hover': {
		backgroundColor: theme.palette.primary.light,
	},
}));

type HeaderAuthorizedProps = {
	user: User;
};

export const HeaderAuthorized: React.FC<HeaderAuthorizedProps> = ({ user }) => {
	const { email } = user;
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const navigate = useNavigate();
	const logout = useLogout();
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) =>
		setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const handleLogout = async () => {
		await logout.mutateAsync();
		navigate(ROUTE_PATH.LOGIN);
	};

	const avatarColor = useMemo(
		() => (email && createColor(email)) ?? '#000',
		[email],
	);

	return (
		<>
			<HeaderContainer>
				<Title variant='h5'>Account Manager</Title>

				<Tooltip title='Account settings'>
					<IconButton onClick={handleClick}>
						<StyledAvatar sx={{ bgcolor: avatarColor }}>
							{user.email[0].toUpperCase()}
						</StyledAvatar>
					</IconButton>
				</Tooltip>
			</HeaderContainer>

			<StyledMenu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<ProfileBox>
					<Typography fontWeight='bold'>{user.email}</Typography>
				</ProfileBox>

				<StyledMenuItem onClick={handleLogout}>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Logout
				</StyledMenuItem>
			</StyledMenu>
		</>
	);
};
