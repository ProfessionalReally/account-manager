import type React from 'react';

import { Box, Button, styled, Typography } from '@mui/material';
import { InlineBadge } from '@shared/ui/inline-badge';

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

type PaperListHeaderProps = {
	buttonChildren: React.ReactNode;
	count?: number;
	onButtonClick?: () => void;
	text: string;
};

export const PaperListHeader: React.FC<PaperListHeaderProps> = ({
	buttonChildren,
	count,
	onButtonClick,
	text,
}) => {
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
				onClick={onButtonClick}
				size='medium'
				variant='contained'
			>
				{buttonChildren}
			</Button>
		</Header>
	);
};
