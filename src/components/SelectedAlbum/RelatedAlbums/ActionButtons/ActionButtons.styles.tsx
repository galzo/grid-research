import styled from 'styled-components';

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 104px;
	animation: fadeIn 1s;
	-webkit-animation: fadeIn 1s;
	-moz-animation: fadeIn 1s;
	-o-animation: fadeIn 1s;
	-ms-animation: fadeIn 1s;
`;

export const ButtonsPlaceholder = styled.div`
	width: 48px;
	height: 104px;
`;

export const ButtonWrapper = styled.div`
	height: 48px;
	width: 48px;
	box-sizing: border-box;
	background: rgba(255, 255, 255, 0.15);
	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 100%;
	box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 200ms ease-in-out;

	&:hover {
		background: rgba(255, 255, 255, 0.4);
		border: 1px solid #ffffff;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;
