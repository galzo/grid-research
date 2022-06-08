import styled from 'styled-components';

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-bottom: 20px;
	animation: fadeIn 1s;
	-webkit-animation: fadeIn 1s;
	-moz-animation: fadeIn 1s;
	-o-animation: fadeIn 1s;
	-ms-animation: fadeIn 1s;
`;

export const Title = styled.span`
	font-size: 36px;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham';
	margin-bottom: 10px;
`;

export const Subtitle = styled.span`
	font-size: 16px;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-light';
`;
