import { useEffect, useMemo, useState } from 'react';

export const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const isLargeWindow = useMemo(() => {
		return windowWidth > 1800;
	}, [windowWidth]);

	useEffect(() => {
		const resizeHandler = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	return { windowWidth, isLargeWindow };
};
