import styled from 'styled-components';
import { FadeInImg } from '../../Base/FadeInImg';
import { FadeInDiv } from '../../Base/FadeInDiv';

export const AlbumItemPlaceholder = styled.div`
	background-color: #282c34;
`;

export const AlbumItemContainer = styled(FadeInDiv)<{
	imageSize: number;
	isDisabled: boolean;
}>`
	width: ${({ imageSize }) => `${imageSize}px`};
	height: ${({ imageSize }) => `${imageSize}px`};
	border: 1px solid;
	cursor: pointer;
	background-color: #282c34;
	opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};

	&.none {
		-webkit-transform: scale(1);
		-moz-transform: scale(1);
		-ms-transform: scale(1);
		transform: scale(1);
		-webkit-transition: -webkit-transform 0.25s;
		-moz-transition: -moz-transform 0.25s;
		-ms-transition: -ms-transform 0.25s;
		transition: transform 0.25s;
		z-index: 1;
	}

	&.focus {
		-webkit-transform: scale(4);
		-moz-transform: scale(4);
		-ms-transform: scale(4);
		transform: scale(4);
		-webkit-transition: -webkit-transform 0.25s;
		-moz-transition: -moz-transform 0.25s;
		-ms-transition: -ms-transform 0.25s;
		transition: transform 0.25s;
		border: 1px solid white;
		-webkit-box-shadow: 7px 7px 14px -2px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -2px rgba(0, 0, 0, 0.81);
		z-index: 2;
	}

	&.related {
		-webkit-transform: scale(2.5);
		-moz-transform: scale(2.5);
		-ms-transform: scale(2.5);
		transform: scale(2.5);
		-webkit-transition: -webkit-transform 0.5s;
		-moz-transition: -moz-transform 0.5s;
		-ms-transition: -ms-transform 0.5s;
		transition: transform 0.5s;
		border: 1px solid white;
		-webkit-box-shadow: 7px 7px 14px -2px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -2px rgba(0, 0, 0, 0.81);
		z-index: 2;
	}
`;

export const AlbumItemImage = styled(FadeInImg)<{
	imageSize: number;
}>`
	width: ${({ imageSize }) => `${imageSize}px`};
	height: ${({ imageSize }) => `${imageSize}px`};
`;
