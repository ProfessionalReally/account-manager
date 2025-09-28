import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	styled,
} from '@mui/material';
import { useModal } from '@shared/lib/modal-context/use-modal';

import type { AppDialogPayload } from './types';

const StyledDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiPaper-root': {
		background: '#444e83',
		borderRadius: 16,
		boxShadow: theme.shadows[24],
		color: theme.palette.primary.contrastText,
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(3),
	},
}));

const DialogHeader = styled(DialogTitle)({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: 16,
});

const DialogBody = styled(DialogContent)({
	flex: 1,
	marginBottom: 16,
});

const DialogFooter = styled(DialogActions)({
	alignItems: 'center',
	display: 'flex',
	gap: 16,
});

export const AppDialogLayout = () => {
	const { onClose, open, payload } = useModal<AppDialogPayload>();

	const { body, header, onClickYes } = payload;

	const handleClickYes = () => {
		onClickYes();
		onClose();
	};

	return (
		<StyledDialog
			fullWidth
			maxWidth='sm'
			onClose={() => onClose()}
			open={open}
		>
			<DialogHeader>{header}</DialogHeader>
			{body && <DialogBody>{body}</DialogBody>}
			<DialogFooter>
				<Button
					autoFocus
					color='info'
					disabled={!open}
					onClick={handleClickYes}
					variant='contained'
				>
					Yes
				</Button>
				<Button
					color='error'
					disabled={!open}
					onClick={() => onClose()}
					variant='contained'
				>
					No
				</Button>
			</DialogFooter>
		</StyledDialog>
	);
};
