import type { KeyCheck } from "../master-key-context/types";

export type User = {
	email: string;
	id: string;
	masterKeySalt?: number[];
	keyCheck?: KeyCheck;
	updatedAt: string;
};
