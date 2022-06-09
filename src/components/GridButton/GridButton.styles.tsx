import styled from 'styled-components';
import { FadeInDiv } from '../Base/FadeInDiv';

export const ButtonWrapper = styled(FadeInDiv)`
	height: 48px;
	width: 48px;
  top: 31px;
  right: 50px;
	position: fixed;
	background: #ffffff;
	border-radius: 50px;
	box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
	justify-content: center;
	transition: all 200ms ease-in-out;
	user-select: none;
  font-size: 18px;
  letter-spacing: 8%;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-medium';
	z-index:5; 

	&:hover {
		height: 48px;
		width: 153px;
		background: #ffffff;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;