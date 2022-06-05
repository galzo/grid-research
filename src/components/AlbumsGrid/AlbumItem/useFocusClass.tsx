import { useEffect, useState } from 'react';
import { resolveGridItemClassName } from '../../../utils/ui/classNamesHandler';

export const useFocusClass = (isFocused: boolean, isRelated: boolean) => {
	const [className, setClassname] = useState<'focus' | 'related' | ''>('');

	useEffect(() => {
		let timeout: any;
		const cssClass = resolveGridItemClassName(isFocused, isRelated);
		const shouldDelayRender = cssClass === 'related';

		if (shouldDelayRender) {
			timeout = setTimeout(() => {
				setClassname(cssClass);
			}, 1000);
		} else {
			setClassname(cssClass);
		}

		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, [isFocused, isRelated]);

	return {
		className,
	};
};
