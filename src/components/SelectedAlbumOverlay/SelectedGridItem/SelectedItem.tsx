import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GridItemId, GridItemPosition } from '../../../common/uiTypes';

interface ISelectedItemProps {
	itemId: GridItemId;
	position: { right: number; left: number; top: number; bottom: number };
}

const SelectedItemFixed = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
`;

const SelectedItemWrapper = styled.div<{ position: GridItemPosition }>`
	position: absolute;
	top: ${({ position }) => `${position.top}px`};
	bottom: ${({ position }) => `${position.bottom}px`};
	left: ${({ position }) => `${position.left}px`};
	right: ${({ position }) => `${position.right}px`};
	z-index: 9999;
	width: 125px;
	height: 125px;
	transition: all 800ms;
	transition-timing-function: ease;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	background-image: url('https://live.staticflickr.com/65535/52091066476_070e538de7_o.jpg');
	background-size: contain;

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
		<SelectedItemFixed>
			<SelectedItemWrapper
				position={position}
				className={isTriggered ? 'enlarge' : ''}
			>
				{'hello world'}
			</SelectedItemWrapper>
		</SelectedItemFixed>
	);
};
