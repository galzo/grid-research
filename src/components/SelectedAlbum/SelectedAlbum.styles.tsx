import styled from 'styled-components';

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
	padding: 80px;
	z-index: 5;
`;

export const OverlayBackground = styled.div`
	position: absolute; /* Sit on top of the page content */
	display: block; /* Hidden by default */
	width: 100%; /* Full width (cover the whole page) */
	height: 100%; /* Full height (cover the whole page) */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7); /* Black background with opacity */
	z-index: 2;
	cursor: pointer; /* Add a pointer on hover */
	animation: fadeIn 1s;
	-webkit-animation: fadeIn 1s;
	-moz-animation: fadeIn 1s;
	-o-animation: fadeIn 1s;
	-ms-animation: fadeIn 1s;
	z-index: 4;
`;
