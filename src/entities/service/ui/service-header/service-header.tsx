import type { JSX } from 'react';
import type React from 'react';

import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import { InlineBadge } from '@shared/ui/inline-badge';
import { useDialogs } from '@toolpad/core/useDialogs';

const Header = styled(Box)({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
});

const TitleBox = styled(Box)({
	alignItems: 'center',
	display: 'flex',
	gap: 8,
});

type ServiceHeaderProps = {
	buttonChildren: React.ReactNode;
	count?: number;
	modal: React.ComponentType<any>;
	payload?: any;
	text: string;
};

export const ServiceHeader: React.FC<ServiceHeaderProps> = ({
	buttonChildren,
	count,
	modal,
	payload,
	text,
}) => {
	const dialog = useDialogs();

	return (
		<Header>
			<TitleBox>
				<Typography
					component={'h3'}
					sx={{
						color: 'primary.contrastText',
					}}
					variant={'h5'}
				>
					{text}
				</Typography>
				<InlineBadge>{count}</InlineBadge>
			</TitleBox>
			<Button
				aria-label='add'
				color='info'
				onClick={() => dialog.open(modal, { ...payload })}
				size='medium'
				variant='contained'
			>
				{buttonChildren}
			</Button>
		</Header>
	);
};
