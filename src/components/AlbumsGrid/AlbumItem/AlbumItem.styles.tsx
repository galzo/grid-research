import styled from 'styled-components';

export const AlbumItemPlaceholder = styled.div`
	background-color: #282c34;
`;

export const AlbumItemImage = styled.img<{ imageSize: number }>`
	width: ${({ imageSize }) => `${imageSize}px`};
	height: ${({ imageSize }) => `${imageSize}px`};
	animation: fadeIn 1s;
	-webkit-animation: fadeIn 1s;
	-moz-animation: fadeIn 1s;
	-o-animation: fadeIn 1s;
	-ms-animation: fadeIn 1s;
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
	}

	&.focus {
		-webkit-transform: scale(2.5);
		-moz-transform: scale(2.5);
		-ms-transform: scale(2.5);
		transform: scale(2.5);
		-webkit-transition: -webkit-transform 0.25s;
		-moz-transition: -moz-transform 0.25s;
		-ms-transition: -ms-transform 0.25s;
		transition: transform 0.25s;
		border-radius: 4px;
		border: 1px solid white;
		-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		z-index: 2;
	}

	&.related {
		-webkit-transform: scale(2);
		-moz-transform: scale(2);
		-ms-transform: scale(2);
		transform: scale(2);
		-webkit-transition: -webkit-transform 0.5s;
		-moz-transition: -moz-transform 0.5s;
		-ms-transition: -ms-transform 0.5s;
		transition: transform 0.5s;
		border: 1px solid white;
		border-radius: 4px;
		-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		z-index: 2;
	}
`;
