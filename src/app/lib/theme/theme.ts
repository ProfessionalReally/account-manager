import { createTheme } from '@mui/material';
import '@fontsource/k2d/400.css';
import '@fontsource/k2d/500.css';
import '@fontsource/k2d/700.css';

export const theme = createTheme({
	palette: {
		background: {
			default:
				'linear-gradient(180deg,rgba(155, 169, 235, 1) 0%, rgba(195, 202, 234, 1) 100%)',
			paper: '#5763a5',
		},
		mode: 'light',
	},
	typography: {
		fontFamily: 'K2D, Arial, sans-serif',
	},
});
