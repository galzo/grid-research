import { useEffect, useState } from 'react';
import { FocusType } from '../../../common/uiTypes';
import { resolveGridItemClassName } from '../../../utils/ui/classNamesHandler';

export const useFocusClass = (isFocused: boolean, isRelated: boolean, isGridZoomedOut: boolean) => {
	const [className, setClassname] = useState<FocusType>('none');

	useEffect(() => {
		// const cssClass = resolveGridItemClassName(isFocused, isRelated);

		if (isFocused) {
			setClassname("focus");
			return;
		}

		if (isRelated && isGridZoomedOut) {
			setClassname("related");
			return;
		}

		setClassname('none');
	}, [isFocused, isGridZoomedOut, isRelated]);

	return {
		className,
	};
};
