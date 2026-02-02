export async function encrypt(text: string, key: CryptoKey) {
	const iv = crypto.getRandomValues(new Uint8Array(12));
	const data = new TextEncoder().encode(text);

	const cipherBuffer = await crypto.subtle.encrypt(
		{ name: 'AES-GCM', iv },
		key,
		data,
	);

	return {
		cipherText: btoa(String.fromCharCode(...new Uint8Array(cipherBuffer))),
		iv: Array.from(iv),
	};
}
