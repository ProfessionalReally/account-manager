import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';

type CopyButtonProps = {
	value?: string;
};

export const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async (value?: string) => {
		if (!value) return;

		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<Tooltip title='Copy'>
			<IconButton size='small' onClick={() => handleCopy(value)}>
				{copied ? (
					<CheckOutlinedIcon fontSize='small' />
				) : (
					<ContentCopyOutlinedIcon fontSize='small' />
				)}
			</IconButton>
		</Tooltip>
	);
};
