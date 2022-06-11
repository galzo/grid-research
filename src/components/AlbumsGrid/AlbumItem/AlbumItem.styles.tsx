import styled from 'styled-components';
import { FadeInImg } from '../../Base/FadeInImg';
import { FadeInDiv } from '../../Base/FadeInDiv';

export const AlbumItemPlaceholder = styled.div`
	background-color: #282c34;
`;

export const AlbumItemContainer = styled(FadeInDiv)<{
	imageSize: number;
	isDisabled: boolean;
	isGridZoomedOut: boolean;
}>`
	width: ${({ imageSize }) => `${imageSize}px`};
	height: ${({ imageSize }) => `${imageSize}px`};
	border: 1px solid;
	cursor: pointer;
	background-color: #282c34;

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
		opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 0.9)};
	}

	&.focus {
		-webkit-transform: ${({ isGridZoomedOut }) => (isGridZoomedOut ? `scale(6)` : `scale(4)`)};
		-moz-transform: ${({ isGridZoomedOut }) => (isGridZoomedOut ? `scale(6)` : `scale(4)`)};
		-ms-transform: ${({ isGridZoomedOut }) => (isGridZoomedOut ? `scale(6)` : `scale(4)`)};
		transform: ${({ isGridZoomedOut }) => (isGridZoomedOut ? `scale(6)` : `scale(4)`)};
		-webkit-transition: -webkit-transform 0.25s;
		-moz-transition: -moz-transform 0.25s;
		-ms-transition: -ms-transform 0.25s;
		transition: transform 0.25s;
		border: 1px solid white;
		-webkit-box-shadow: 0 3px 14px -2px rgba(0, 0, 0, 0.5);
		box-shadow: 0 3px 14px -2px rgba(0, 0, 0, 0.5);
		z-index: 2;
		opacity: 1;

		&:hover {
			opacity: ${({ isGridZoomedOut }) => (isGridZoomedOut ? 0.8 : 1)};
		}
	}

	&.related {
		-webkit-transform: scale(4);
		-moz-transform: scale(4);
		-ms-transform: scale(4);
		transform: scale(4);
		-webkit-transition: -webkit-transform 0.5s;
		-moz-transition: -moz-transform 0.5s;
		-ms-transition: -ms-transform 0.5s;
		transition: transform 0.5s;
		border: 1px solid white;
		-webkit-box-shadow: 7px 7px 14px -2px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -2px rgba(0, 0, 0, 0.81);
		z-index: 2;
		opacity: 1;

		&:hover {
			opacity: 0.8;
		}
	}
`;

export const AlbumItemImage = styled(FadeInImg)<{
	imageSize: number;
}>`
	width: ${({ imageSize }) => `${imageSize}px`};
	height: ${({ imageSize }) => `${imageSize}px`};
`;
