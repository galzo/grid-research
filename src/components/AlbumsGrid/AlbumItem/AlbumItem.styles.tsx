import styled from 'styled-components';
import { FadeInImg } from '../../Base/FadeInImg';

export const AlbumItemPlaceholder = styled.div`
	background-color: #282c34;
`;

export const AlbumItemContainer = styled.div<{ imageSize: number, isZoomOut: boolean }>`
	position: relative;
	transition: all 0.5s ease-in-out;
	transition-property: transform, opacity;

	${({ isZoomOut }) => isZoomOut ? `
		&.none {
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
		opacity: 0.3;
		z-index: 1;
		}` : 
		`&.none {
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
		opacity: 1;
		z-index: 1;
		}`
	}

${({ isZoomOut }) => !isZoomOut ? `
		&:hover {
		-webkit-transform: scale(4);
		-moz-transform: scale(4);
		-ms-transform: scale(4);
		transform: scale(4);
		border: 1px solid white;
		-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		transition: transform 0.2s;
		z-index: 2;
	}` : 
		`&:hover {
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
		border: none;
		-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		transition: transform 0.2s;
		z-index: 2;
	}`
	}

	&.focus {
		-webkit-transform: scale(4);
		-moz-transform: scale(4);
		-ms-transform: scale(4);
		transform: scale(4);
		transition: transform 0.25s;
		border: 1px solid white;
		-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		opacity: 1;
		z-index: 2;
	}

	&.related {
		-webkit-transform: scale(2.5);
		-moz-transform: scale(2.5);
		-ms-transform: scale(2.5);
		transform: scale(2.5);
		transition: transform 0.5s;
		border: 1px solid white;
		-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		opacity: 1;
		z-index: 2;
	}
`;

export const AlbumItemZoomOutButton = styled.button<{ imageSize: number }>`
	position: absolute;
	top: ${({ imageSize }) => `${imageSize}px`};
	width: ${({ imageSize }) => `${imageSize}px`};
	height: 10px;
	left: 0;
	border: none;
	background: white;
	cursor: pointer;
	font-size:8px;
	margin-top: 0px;
	border-radius: 2px;
	opacity: 0;
	transition: all 0.2s 0.5s;
	
	&:hover {
		opacity: .8;
	}

	${AlbumItemContainer}:hover & {
		opacity: 1;
		margin-top: 4px;
	}
`;

export const AlbumItemImage = styled(FadeInImg)<{ imageSize: number }>`
	width: ${({ imageSize }) => `${imageSize}px`};
	height: ${({ imageSize }) => `${imageSize}px`};
	border: 1px solid;
	cursor: pointer;
	background-color: #282c34;
`;
