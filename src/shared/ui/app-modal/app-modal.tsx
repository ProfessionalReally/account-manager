import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, type ModalProps, styled } from '@mui/material';
import * as React from 'react';
import { type FC } from 'react';

import { useModal } from '../../lib/modal-context/use-modal';

type AppModalProps = Omit<ModalProps, 'children' | 'onClose' | 'open'> & {
	body: React.ReactNode;
	footer?: React.ReactNode;
	header?: React.ReactNode;
};

const ModalContent = styled(Box)(({ theme }) => ({
	background: '#444e83',
	borderRadius: 16,
	boxShadow: theme.shadows[24],
	color: theme.palette.primary.contrastText,
	display: 'flex',
	flexDirection: 'column',
	left: '50%',
	padding: theme.spacing(3),
	position: 'absolute',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
}));

const ModalHeader = styled(Box)({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: 16,
});

const ModalBody = styled(Box)({
	flex: 1,
	marginBottom: 16,
});

const ModalFooter = styled(Box)({
	alignItems: 'center',
	display: 'flex',
	gap: 16,
});

const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
}));

export const AppModal: FC<AppModalProps> = ({
	body,
	footer,
	header,
	...props
}) => {
	const { onClose, open } = useModal();

	return (
		<Modal {...props} onClose={() => onClose()} open={open}>
			<ModalContent>
				{header && (
					<ModalHeader>
						{header}
						<IconButton onClick={() => onClose()}>
							<StyledCloseIcon />
						</IconButton>
					</ModalHeader>
				)}
				<ModalBody>{body}</ModalBody>
				{footer && <ModalFooter>{footer}</ModalFooter>}
			</ModalContent>
		</Modal>
	);
};
