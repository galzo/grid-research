import styled, { css } from 'styled-components';
import { FadeInDiv } from '../Base/FadeInDiv';

export const GridWrapper = styled.div<{ size: number; isZoomedOut: boolean }>`
	width: 180%;
	padding: 40px;
	display: grid;
	box-sizing: border-box;
	grid-template-columns: ${({ size }) =>
		`repeat(auto-fill, minmax(${size}px, 1fr));`};
	grid-auto-rows: ${({ size }) => `minmax(${size}px, 1fr)`};
	column-gap: 1px;
	row-gap: 1px;
	background-color: rgba(0, 0, 0, 0.7);
	overflow: visible;
	transform-origin: left;
	transition: transform 500ms;
	${({ isZoomedOut }) =>
		isZoomedOut &&
		css`
			transform: scale(0.55);
		`}
`;

export const GridSimilarAlbumsTitle = styled.div<{ isZoomedOut: boolean }>`
	position: fixed;
	color: white;
	top: -120px;
	left: 40px;
	font-size: 62px;
	font-weight: 600;
	transition: opacity 0.5s 1.25s;
	opacity: ${({ isZoomedOut }) => (isZoomedOut ? 0.85 : 0)};

	span {
		opacity: 0.6;
	}
`;

export const GridCloseZoombutton = styled.div`
	position: fixed;
	top: 10px;
	left: 20px;
`;
