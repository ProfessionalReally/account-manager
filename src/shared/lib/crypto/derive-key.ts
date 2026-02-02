export async function deriveKey(
	password: string,
	salt: Uint8Array,
): Promise<CryptoKey> {
	const enc = new TextEncoder();
	const baseKey = await crypto.subtle.importKey(
		'raw',
		enc.encode(password),
		'PBKDF2',
		false,
		['deriveKey'],
	);

	return crypto.subtle.deriveKey(
		{
			name: 'PBKDF2',
			salt,
			iterations: 150_000,
			hash: 'SHA-256',
		},
		baseKey,
		{ name: 'AES-GCM', length: 256 },
		false,
		['encrypt', 'decrypt'],
	);
}
