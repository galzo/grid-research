export type GridItemId = {
	row: number;
	col: number;
};

export type GridItemPosition = {
	top: number;
	bottom: number;
	left: number;
	right: number;
};

export type FocusType = 'focus' | 'related' | 'hover' | 'none';
