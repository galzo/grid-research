import styled, { css } from 'styled-components';
import { GridItemPosition } from '../../../common/uiTypes';

export const FixedItemWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
`;

export const SelectedItemImage = styled.img`
	width: 100%;
	height: 100%;
	transition: all 1000ms ease-in-out;
`;

export const SelectedItemWrapper = styled.div<{
	position: GridItemPosition;
	size: 'small' | 'large';
	image?: string;
}>`
	position: absolute;
	-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);

	top: ${({ position, size }) =>
		size === 'small' ? `${position.top}px` : `60px`};

	bottom: ${({ position, size }) =>
		size === 'small' ? `${position.bottom}px` : 0};

	left: ${({ position, size }) =>
		size === 'small' ? `${position.left}px` : '53%'};

	right: ${({ position, size }) =>
		size === 'small' ? `${position.top}px` : 0};

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
