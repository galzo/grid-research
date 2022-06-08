import styled, { css } from 'styled-components';
import { GridItemPosition } from '../../../common/uiTypes';

export const AlbumImg = styled.img`
	width: 100%;
	height: 100%;
	transition: all 1000ms ease-in-out;
`;

export const AlbumImageWrapper = styled.div<{
	sourcePosition: GridItemPosition;
	targetPosition: GridItemPosition;
	size: 'small' | 'large';
	image?: string;
}>`
	position: absolute;
	-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);

	top: ${({ sourcePosition, targetPosition, size }) =>
		size === 'small'
			? `${sourcePosition.top}px`
			: `${targetPosition.top}px`};

	bottom: ${({ sourcePosition, targetPosition, size }) =>
		size === 'small'
			? `${sourcePosition.bottom}px`
			: `${targetPosition.bottom}px`};

	left: ${({ sourcePosition, targetPosition, size }) =>
		size === 'small'
			? `${sourcePosition.left}px`
			: `${targetPosition.left}px`};

	right: ${({ sourcePosition, targetPosition, size }) =>
		size === 'small'
			? `${sourcePosition.top}px`
			: `${targetPosition.right}px`};

	border: 2px solid #ffffff;
	border-radius: 4px;
	z-index: 9999;
	width: ${({ size }) => (size === 'small' ? '125px' : '586px')};
	height: ${({ size }) => (size === 'small' ? '125px' : '586px')};
	transition: all 800ms;
	transition-timing-function: ease;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	background-color: #282c34;
	background-size: contain;
`;
