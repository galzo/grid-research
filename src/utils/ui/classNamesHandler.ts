export const resolveGridItemClassName = (
	isFocused: boolean,
	isNeighbour: boolean,
) => {
	if (isFocused) {
		return 'hover';
	}
	if (isNeighbour) {
		return 'neighbour';
	}
	return '';
};
