import { useState, useEffect } from 'react';

const OPTIONS = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0,
};

export const useIsVisible = (elementRef: any) => {
	const [isVisible, setIsVisible] = useState(true);

	// useEffect(() => {
	// 	if (elementRef.current) {
	// 		const intersectObserver = new IntersectionObserver(
	// 			(entries, observer) => {
	// 				entries.forEach((entry) => {
	// 					if (entry.isIntersecting) {
	// 						setIsVisible(true);
	// 						observer.unobserve(elementRef.current);
	// 					}
	// 				});
	// 			},
	// 			OPTIONS,
	// 		);
	// 		intersectObserver.observe(elementRef.current);
	// 	}
	// }, [elementRef, isConstantlyVisible, isVisible]);

	return { isVisible };
};
