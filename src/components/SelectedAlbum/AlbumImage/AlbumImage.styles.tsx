import styled, { css } from 'styled-components';
import { GridItemPosition } from '../../../common/uiTypes';

export const AlbumImg = styled.img`
	width: 100%;
	height: 100%;
	transition: all 1000ms ease-in-out;
`;

const resolveImageSize = (size: 'small' | 'large', isLargeWindow: boolean) => {
	if (size === 'small') {
		return '125px';
	}

	return isLargeWindow ? '580px' : '400px';
};

export const AlbumImageWrapper = styled.div<{
	sourcePosition: GridItemPosition;
	targetPosition: GridItemPosition;
	size: 'small' | 'large';
	image?: string;
	isLargeWindow: boolean;
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

	border: 1px solid rgba(255, 255, 255, 0.6);
	z-index: 9999;
	width: ${({ size, isLargeWindow }) =>
		resolveImageSize(size, isLargeWindow)};
	height: ${({ size, isLargeWindow }) =>
		resolveImageSize(size, isLargeWindow)};
	transition: all 800ms;
	transition-timing-function: ease;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	background-color: #282c34;
	background-size: contain;
`;
