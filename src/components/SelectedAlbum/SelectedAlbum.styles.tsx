import styled from 'styled-components';
import { FadeInDiv } from '../Base/FadeInDiv';

export const OverlayWrapper = styled.div`
	position: fixed;
	display: flex;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	flex-direction: column;
	z-index: 6;
	box-sizing: border-box;
`;

export const OverlayBackground = styled(FadeInDiv)`
	position: absolute; /* Sit on top of the page content */
	display: block; /* Hidden by default */
	width: 100%; /* Full width (cover the whole page) */
	height: 100%; /* Full height (cover the whole page) */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.9); /* Black background with opacity */
	z-index: 5;
`;

export const AlbumContent = styled(FadeInDiv)`
	z-index: 7;
	padding: 10px 120px 0 150px;
`;

