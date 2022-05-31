import styled from 'styled-components';

export const GridItemImage = styled.div<{ imageUrl: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(${({ imageUrl }) => imageUrl});
	background-size: contain;

	&.hover {
		-webkit-transform: scale(2.5);
		-moz-transform: scale(2.5);
		-ms-transform: scale(2.5);
		transform: scale(2.5);
		-webkit-transition: -webkit-transform 0.25s;
		-moz-transition: -moz-transform 0.25s;
		-ms-transition: -ms-transform 0.25s;
		transition: transform 0.25s;
		border: 1px solid white;
		border-radius: 4px;

		-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
		box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	}

	&.neighbour {
		-webkit-transform: scale(1.5);
		-moz-transform: scale(1.5);
		-ms-transform: scale(1.5);
		transform: scale(1.5);
		-webkit-transition: -webkit-transform 0.5s;
		-moz-transition: -moz-transform 0.5s;
		-ms-transition: -ms-transform 0.5s;
		transition: transform 0.5s;
	}
`;
