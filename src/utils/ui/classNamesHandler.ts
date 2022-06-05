import { FocusType } from '../../common/uiTypes';

export const resolveGridItemClassName = (
	isFocused: boolean,
	isRelated: boolean,
): FocusType => {
	if (isFocused) {
		return 'focus';
	}
	if (isRelated) {
		return 'related';
	}

	return 'none';
};
