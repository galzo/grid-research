import styled from 'styled-components';

export const GridLoaderWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
`;

export const LoaderImage = styled.img`
	width: 150px;
	height: 150px;
	animation: fadeIn 3s;
	-webkit-animation: fadeIn 3s;
	-moz-animation: fadeIn 3s;
	-o-animation: fadeIn 3s;
	-ms-animation: fadeIn 3s;
`;
