import { invariant } from 'es-toolkit';
import type { PasswordGeneratorOptions } from './types';

const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '0123456789';
const SPECIAL = '!@#$%^&*()_+-=[]{}|;:,.<>?';
const SIMILAR = /[0Ool1I]/g;

export const generatePassword = ({
	length = 16,
	lowercase = true,
	uppercase = true,
	digits = true,
	special = true,
	excludeSimilar = true,
}: PasswordGeneratorOptions | undefined = {}): string => {
	let charset = '';

	if (lowercase) charset += LOWER;
	if (uppercase) charset += UPPER;
	if (digits) charset += DIGITS;
	if (special) charset += SPECIAL;

	invariant(
		charset.length > 0,
		'At least one character set must be selected',
	);

	if (excludeSimilar) {
		charset = charset.replace(SIMILAR, '');
	}

	const random = new Uint32Array(length);
	crypto.getRandomValues(random);

	return Array.from(random, (x) => charset[x % charset.length]).join('');
};
