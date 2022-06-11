import { FocusType } from '../../common/uiTypes';

export const resolveGridItemClassName = (
	isFocused: boolean,
	isRelated: boolean,
	isHovered: boolean,
): FocusType => {
	if (isFocused) {
		return 'focus';
	}
	if (isRelated) {
		return 'related';
	}
	if (isHovered) {
		return 'hover';
	}
 
	return 'none';
};
