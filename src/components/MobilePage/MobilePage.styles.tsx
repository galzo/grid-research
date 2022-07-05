import styled from 'styled-components';
import { FadeInDiv } from '../Base/FadeInDiv';

export const OverlayWrapper = styled.div`
	position: fixed;
	display: flex;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	flex-direction: column;
	z-index: 6;
	box-sizing: border-box;
	background: url('https://i.ibb.co/swG4rcp/Mobile-Background-Syncover.jpg');
  padding: 18px;
`;

export const BoldTitle = styled.div`
  text-align: center;
	font-size: 18.5px;
  letter-spacing: 8%;
	color: #ffffff;
	font-weight: 400;
	margin-bottom: 60px;
`;

export const MobilePageContainer = styled.div`
  line-height: 2em;
	margin: auto;
  row-gap: 45px;
  z-index: 200;
`;

export const ButtonWrapper = styled(FadeInDiv)`
	width: 210px;
	padding: 13px;
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
	font-weight: 600;
	margin-bottom: 16px;

	&:hover {
		opacity: 0.8;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;