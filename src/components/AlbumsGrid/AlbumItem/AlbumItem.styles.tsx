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

	&.focus {
		-webkit-transform: scale(3);
		-moz-transform: scale(3);
		-ms-transform: scale(3);
		transform: scale(3);
		-webkit-transition: -webkit-transform 0.25s;
		-moz-transition: -moz-transform 0.25s;
		-ms-transition: -ms-transform 0.25s;
		transition: transform 0.25s;
		border-radius: 4px;
		border: 1px solid white;
		-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
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
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-o-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
