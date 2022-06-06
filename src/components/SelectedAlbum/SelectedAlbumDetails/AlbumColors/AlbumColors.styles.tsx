import styled from 'styled-components';

export const AlbumColorsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	animation: fadeIn 1s;
	-webkit-animation: fadeIn 1s;
	-moz-animation: fadeIn 1s;
	-o-animation: fadeIn 1s;
	-ms-animation: fadeIn 1s;
`;

export const AlbumColorWrapper = styled.div<{ color: string }>`
	background-color: ${({ color }) => color};
	border: 1px solid #ffffff;
	margin-right: 10px;
	border-radius: 4px;
	width: 28px;
	height: 28px;
	flex-grow: 0;
	flex-shrink: 0;
`;
