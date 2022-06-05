import styled from 'styled-components';
import { GridItemPosition } from '../../../common/uiTypes';

export const FixedItemWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 9999;
`;

export const SelectedItemWrapper = styled.div<{
	position: GridItemPosition;
	image?: string;
}>`
	position: absolute;
	-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	top: ${({ position }) => `${position.top}px`};
	bottom: ${({ position }) => `${position.bottom}px`};
	left: ${({ position }) => `${position.left}px`};
	right: ${({ position }) => `${position.right}px`};
	border: 2px solid #ffffff;
	border-radius: 4px;
	z-index: 9999;
	width: 125px;
	height: 125px;
	transition: all 800ms;
	transition-timing-function: ease;
	transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	background-image: ${({ image }) => `url(${image})`};
	background-color: #282c34;
	background-size: contain;

	&.enlarge {
		width: 586px;
		height: 586px;
		top: 15vh;
		left: 55vw;
	}
`;
