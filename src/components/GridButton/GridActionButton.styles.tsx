import styled from 'styled-components';
import { FadeInDiv } from '../Base/FadeInDiv';

export const IconWrapper = styled.div`
	width:48px;
	height:48px;
	justify-content: center;
	align-items: center;
	display: flex;
	flex: none;
	`;

export const ButtonWrapper = styled(FadeInDiv)`
	width: 48px;
	height: 48px;
	display: flex;
	background: #ffffff;
	border-radius: 50px;
	box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
	justify-content: right;
	align-items: center;
	transition: all 200ms ease-in-out;
	user-select: none;
  font-size: 18px;
  letter-spacing: 8%;
	color: #262626;
	font-weight: 400;
	font-family: 'Gotham-medium';
	margin-bottom: 10px;
	overflow: hidden;
	z-index: 5; 

	img {
		height: 17px;
		margin-top: -1px;
	}

	span {
		opacity: 0;
		font-size: 12px;
		flex: none;
		font-weight: 500;
		color: #262626;
		transition: all 200ms 200ms ease-in-out;
	}

	&:hover {
		width: 177px;
		background: #ffffff;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;

		span {
			opacity: 1;
		}
	}

	&:first-child:hover {
		width: 160px;
	}
`;