import styled from 'styled-components';
import { FadeInDiv } from '../Base/FadeInDiv';

export const OpenPageContainer = styled(FadeInDiv)`
	display: flex;
  width: 840px;
  height: 551px; 
	flex-direction: row;
	justify-content: center;
  margin: auto;
  row-gap: 59px;
  z-index: 7;
`;

export const GifContainer = styled.span`
  width: 155px;
  height: 243px; 
  display: flex;
	flex-direction: column;
	justify-content: center;
  margin: auto;
  z-index: 6; 
`;

export const Title = styled.span`
	font-size: 18px;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-bold';
  align-items: flex-end;
  letter-spacing: 8%;
  margin-right: 8px;
`;

export const BoldTitle = styled.span`
	font-size: 18px;
  letter-spacing: 8%;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-book';
`;

export const BoldSubtitle = styled.span`
	font-size: 16px;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-bold';
  align-items: flex-end;
  letter-spacing: 8%;
  margin-right: 8px;
`;

export const Subtitle = styled.span`
	font-size: 16px;
  letter-spacing: 8%;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-book';
`;

export const GifImage = styled.img`
	width: 99px;
	height: 99px;
  opacity: 0.6;
	animation: fadeIn 3s;
	-webkit-animation: fadeIn 3s;
	-moz-animation: fadeIn 3s;
	-o-animation: fadeIn 3s;
	-ms-animation: fadeIn 3s;
`;

export const FindGifImage = styled.img`
	width: 198px;
	height: 99px;
  opacity: 0.6;
	animation: fadeIn 3s;
	-webkit-animation: fadeIn 3s;
	-moz-animation: fadeIn 3s;
	-o-animation: fadeIn 3s;
	-ms-animation: fadeIn 3s;
`;


export const ButtonWrapper = styled(FadeInDiv)`
	height: 50px;
	width: 210px;
	box-sizing: border-box;
	background: rgba(255, 255, 255, 0.15);
	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 50px;
	box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 200ms ease-in-out;
	user-select: none;
  font-size: 18px;
  letter-spacing: 8%;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-medium';

	&:hover {
		background: rgba(255, 255, 255, 0.4);
		border: 1px solid #ffffff;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;