import { useEffect, useState } from 'react';

export const useDelayedRender = (delayInMs: number) => {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShouldRender(true);
		}, delayInMs);
	}, [delayInMs]);

	return { shouldRender };
};
