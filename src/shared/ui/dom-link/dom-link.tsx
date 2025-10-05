import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const DomLink = styled(Link)(({ theme }) => ({
	'&:hover': {
		textDecoration: 'underline',
	},
	color: theme.palette.info.main,

	textDecoration: 'none',
}));
