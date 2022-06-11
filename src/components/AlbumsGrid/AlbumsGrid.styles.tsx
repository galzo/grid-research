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
