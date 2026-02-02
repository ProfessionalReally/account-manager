export async function decrypt(
	cipherText: string,
	ivArray: number[],
	key: CryptoKey,
) {
	const bytes = Uint8Array.from(atob(cipherText), (c) => c.charCodeAt(0));
	const iv = new Uint8Array(ivArray);

	const decrypted = await crypto.subtle.decrypt(
		{ name: 'AES-GCM', iv },
		key,
		bytes,
	);
	return new TextDecoder().decode(decrypted);
}
