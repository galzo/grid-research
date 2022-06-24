import styled from 'styled-components';
import { FadeInDiv } from '../Base/FadeInDiv';

export const OpenPageContainer = styled(FadeInDiv)`
  line-height: 1.5em;
	margin: auto;
  row-gap: 45px;
  z-index: 7;
`;

export const Gifs = styled.div`
	width: 840px;
	display: flex;
	flex-direction: row;
	gap: 56px;
	margin: auto;
	margin-bottom: 60px;
`;

export const GifContainer = styled.div`
	width: 242px;
`;

export const BoldTitle = styled.div`
	font-size: 19px;
  letter-spacing: 8%;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-book';
	margin-bottom: 60px;
`;

export const BoldSubtitle = styled.div`
	font-size: 16px;
	color: #ffffff;
	font-family: 'Gotham-bold';
  align-items: flex-end;
  letter-spacing: 8%;
  margin-right: 8px;
`;

export const Subtitle = styled.div`
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
	margin-bottom: 16px;
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
	margin-bottom: 16px;
	animation: fadeIn 3s;
	-webkit-animation: fadeIn 3s;
	-moz-animation: fadeIn 3s;
	-o-animation: fadeIn 3s;
	-ms-animation: fadeIn 3s;
`;


export const ButtonWrapper = styled(FadeInDiv)`
	width: 210px;
	padding: 14px;
	box-sizing: border-box;
	background: #ffffff;
	border-radius: 50px;
	box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
	z-index: 5;
	display: flex;
  margin: auto;
	justify-content: center;
	transition: all 200ms ease-in-out;
	user-select: none;
  font-size: 16px;
  letter-spacing: 8%;
	color: black;
	font-weight: 400;
	font-family: 'Gotham-medium';
	margin-bottom: 16px;

	&:hover {
		opacity: 0.8;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;

export const ButtonLearnMore = styled(FadeInDiv)`
	height: 50px;
	width: 210px;
	padding: 18px;
	box-sizing: border-box;
	box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
	z-index: 5;
	display: flex;
  margin: auto;
	justify-content: center;
	transition: all 200ms ease-in-out;
	user-select: none;
  font-size: 16px;
  letter-spacing: 8%;
	color: white;
	font-weight: 400;
	font-family: 'Gotham-medium';

	&:hover {
		opacity: 0.8;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;