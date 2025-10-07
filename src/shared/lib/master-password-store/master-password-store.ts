import dayjs from 'dayjs';

type ServiceHash = {
	expiresAt: dayjs.Dayjs;
	hash: string;
};

const masterPasswords = new Map<string, ServiceHash>();

const EXPIRATION_MINUTES = 5;

export function clearMasterPassword(serviceId: string) {
	masterPasswords.delete(serviceId);
}

export function getMasterPassword(serviceId: string): null | string {
	const entry = masterPasswords.get(serviceId);
	if (!entry) return null;

	// Проверяем срок действия через dayjs
	if (dayjs().isAfter(entry.expiresAt)) {
		masterPasswords.delete(serviceId);
		return null;
	}

	return entry.hash;
}

export function getRemainingTime(serviceId: string): null | number {
	const entry = masterPasswords.get(serviceId);
	if (!entry) return null;

	const remainingMs = entry.expiresAt.diff(dayjs());
	return remainingMs > 0 ? remainingMs : 0;
}

export function setMasterPassword(serviceId: string, hash: string) {
	masterPasswords.set(serviceId, {
		expiresAt: dayjs().add(EXPIRATION_MINUTES, 'minute'),
		hash,
	});
}
