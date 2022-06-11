import styled from 'styled-components';
import { FadeInDiv } from '../Base/FadeInDiv';

export const GridWrapper = styled.div<{ size: number }>`
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
	overflow: visibale;
	transition: transform 1s;

	&.no-zoom {
		transform: scale(1);
	}
	
	&.zoom-out {
		transform: scale(.55);
	}
`;
