import * as React from 'react';
import { Box, styled } from '@mui/material';

const StyledInlineBadge = styled(Box)(({ theme }) => ({
	display: 'inline-block',
	padding: '0 8px',
	color: theme.palette.common.white,
	backgroundColor: theme.palette.primary.main,
	borderRadius: '12px',
	verticalAlign: 'middle',
}));

export const InlineBadge = ({ children }: { children: React.ReactNode }) => {
	return <StyledInlineBadge>{children}</StyledInlineBadge>;
};
