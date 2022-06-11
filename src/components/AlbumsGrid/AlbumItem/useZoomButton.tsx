import { useEffect, useState } from 'react';

export const useZoomButton = (isFocused: boolean, isZoomedOut: boolean) => {
	const [shouldRenderButton, setShouldRenderButton] = useState(false);

	useEffect(() => {
		let timeout: any;

		const shouldRender = isFocused && !isZoomedOut;
		if (shouldRender) {
			timeout = setTimeout(() => {
				setShouldRenderButton(true);
			}, 1000);
		} else {
			setShouldRenderButton(false);
		}

		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, [isFocused, isZoomedOut]);

	return {
		shouldRenderButton,
	};
};
