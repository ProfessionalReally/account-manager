import { Box, CircularProgress, styled } from '@mui/material';

const StyledFullscreenLoader = styled(Box)(() => ({
	alignItems: 'center',
	backgroundColor: 'rgba(0,0,0,0.3)',
	display: 'flex',
	height: '100vh',
	justifyContent: 'center',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '100vw',
	zIndex: 1300,
}));

export const FullscreenLoader = () => {
	return (
		<StyledFullscreenLoader>
			<CircularProgress size={100} />
		</StyledFullscreenLoader>
	);
};
