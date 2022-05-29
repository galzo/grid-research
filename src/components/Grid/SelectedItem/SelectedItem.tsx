import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GridItemId, GridItemPosition } from '../../../common/types';

interface ISelectedItemProps {
	itemId: GridItemId;
	position: { right: number; left: number; top: number; bottom: number };
}

const SelectedItemWrapper = styled.div<{ position: GridItemPosition }>`
	position: absolute;
	top: ${({ position }) => `${position.top}px`};
	bottom: ${({ position }) => `${position.bottom}px`};
	left: ${({ position }) => `${position.left}px`};
	right: ${({ position }) => `${position.right}px`};
	z-index: 9999;
	width: 125px;
	height: 125px;
	background-color: white;
	transition: all 800ms;
	transition-timing-function: ease;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

	&.enlarge {
		width: 586px;
		height: 586px;
		top: 120px;
		left: 92px;
	}
`;

export const SelectedItem: FC<ISelectedItemProps> = ({ position }) => {
	const [isTriggered, setIsTriggered] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsTriggered(true);
		}, 0);
	}, [position]);

	return (
		<SelectedItemWrapper
			position={position}
			className={isTriggered ? 'enlarge' : ''}
		>
			{'hello world'}
		</SelectedItemWrapper>
	);
};
