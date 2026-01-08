import { Paper, styled } from '@mui/material';
import { HeaderMenu } from './header-menu';

const StyledPaper = styled(Paper)(() => ({
	padding: '20px 40px',
	borderRadius: '0 0 16px 16px',
	minHeight: '96px',
	display: 'flex',
	alignItems: 'center',
}));

export function Header() {
	return (
		<StyledPaper>
			<HeaderMenu />
		</StyledPaper>
	);
}
