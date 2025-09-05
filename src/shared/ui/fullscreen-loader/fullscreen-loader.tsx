import { Box, CircularProgress, styled } from '@mui/material';

const StyledFullscreenLoader = styled(Box)(() => ({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100vw',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'rgba(0,0,0,0.3)',
	zIndex: 1300,
}));

export const FullscreenLoader = () => {
	return (
		<StyledFullscreenLoader>
			<CircularProgress size={100} />
		</StyledFullscreenLoader>
	);
};
