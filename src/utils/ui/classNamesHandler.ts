export const resolveGridItemClassName = (
	isFocused: boolean,
	isRelated: boolean,
) => {
	if (isFocused) {
		return 'focus';
	}
	if (isRelated) {
		return 'related';
	}
	return '';
};
