import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const resizeHandler = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', resizeHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

	return { windowWidth };
};
