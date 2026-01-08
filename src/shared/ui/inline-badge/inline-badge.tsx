import { Box, styled } from '@mui/material';
import * as React from 'react';

const StyledInlineBadge = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	borderRadius: '12px',
	color: theme.palette.common.white,
	display: 'inline-block',
	padding: '0 8px',
	verticalAlign: 'middle',
}));

export const InlineBadge = ({ children }: { children: React.ReactNode }) => {
	return <StyledInlineBadge>{children}</StyledInlineBadge>;
};
