import type { Account } from '@shared/lib/types/account';

import {
	Box,
	CardContent,
	Divider,
	Grid,
	Paper,
	styled,
	Typography,
} from '@mui/material';
import { ROUTE_PATH } from '@shared/config/router/routes';
import { getRelativeTime } from '@shared/lib/dayjs/get-relative-time/get-relative-time';
import { DomLink } from '@shared/ui/dom-link/dom-link';
import { type FC } from 'react';
import { generatePath } from 'react-router-dom';

// import { ServiceModal } from '../service-modal';

const StyledAccountCard = styled(Paper)(({ theme }) => ({
	background: '#444e83',
	borderRadius: theme.shape.borderRadius * 3,
	height: '100%',
	shadowColor: theme.palette.secondary.main,
}));

const StyledCardContent = styled(CardContent)({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'row',
	height: '100%',
	justifyContent: 'center',
	maxWidth: '100%',
	width: '100%',
});

type AccountCardProps = {
	account: Account;
};

export const AccountCard: FC<AccountCardProps> = ({ account }) => {
	const { comment, id, name, serviceId, updatedAt } = account;

	return (
		<Grid size={{ md: 6, sm: 12, xs: 12 }} sx={{ height: 90 }}>
			<StyledAccountCard variant='outlined'>
				<StyledCardContent>
					<Box
						style={{
							flex: '0 0 25%',
							minWidth: 0,
						}}
					>
						<DomLink
							to={generatePath(ROUTE_PATH.ACCOUNT_ID, {
								accountId: id,
								serviceId,
							})}
						>
							<Typography
								component='h2'
								sx={{
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
									wordBreak: 'break-word',
								}}
								textAlign={'center'}
								variant='subtitle1'
							>
								{name}
							</Typography>
						</DomLink>
					</Box>

					<Divider
						orientation='vertical'
						style={{ marginInline: 4 }}
					/>

					<Box
						sx={{
							flex: '0 0 50%',
							minWidth: 0,
						}}
					>
						<Typography
							color='primary.contrastText'
							component='p'
							sx={{
								display: '-webkit-box',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: 2,
								wordBreak: 'break-word',
							}}
							textAlign={'center'}
							variant='body1'
						>
							{comment}
						</Typography>
					</Box>

					<Divider
						orientation='vertical'
						style={{ marginInline: 4 }}
					/>

					<Box
						style={{
							flex: '0 0 25%',
							minWidth: 0,
						}}
					>
						<Typography
							color='primary.contrastText'
							component='p'
							sx={{
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								wordBreak: 'break-word',
							}}
							textAlign={'center'}
							variant='body2'
						>
							{updatedAt && getRelativeTime(updatedAt)}
						</Typography>
					</Box>
				</StyledCardContent>
			</StyledAccountCard>
		</Grid>
	);
};
