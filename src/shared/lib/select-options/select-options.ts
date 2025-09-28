export const selectOptions = <T extends { id: string; name: string }>(
	items: T[],
) => items.map((item) => ({ id: item.id, label: item.name }));
