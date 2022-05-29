const buildRangeArray = (size: number) => {
	return Array.from(Array(size).keys());
};

export const buildDimensionsMatrix = (rows: number, columns: number) => {
	const rowsRange = buildRangeArray(rows);
	const columnsRange = buildRangeArray(columns);
	return {
		rows: rowsRange,
		columns: columnsRange,
	};
};

export const flattenArray = <T>(array: T[][]): T[] => {
	return array.reduce((res, current) => {
		return [...res, ...current];
	}, []);
};
