import { Pagination, styled } from '@mui/material';

export const AppPagination = styled(Pagination)(({ theme }) => ({
	'& .MuiPaginationItem-root': {
		color: theme.palette.common.white,
		borderColor: theme.palette.common.white,
		fontWeight: 600,
		'&:hover': {
			backgroundColor: theme.palette.action.hover,
		},
	},
	'& .MuiPaginationItem-page.Mui-selected': {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
		fontWeight: 700,
		'&:hover': {
			backgroundColor: theme.palette.grey[100],
		},
	},
	'& .MuiPaginationItem-icon': {
		color: theme.palette.common.white,
	},
	'& .MuiPaginationItem-ellipsis': {
		color: theme.palette.common.white,
	},
	'& .Mui-disabled': {
		opacity: theme.palette.action.disabledOpacity,
		color: theme.palette.common.white,
	},
}));
