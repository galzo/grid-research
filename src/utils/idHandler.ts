import { GridItemId } from './../common/types';

export const areIdsEqual = (id?: GridItemId, otherId?: GridItemId) => {
	if (!id || !otherId) return false;
	return id.row === otherId.row && id.col === otherId.col;
};

export const idToString = (id: GridItemId) => {
	return `${id.row}${id.col}`;
};
