import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

export const ButtonWrapper = styled(FadeInDiv)`
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
	user-select: none;

	&:hover {
		background: rgba(255, 255, 255, 0.4);
		border: 1px solid #ffffff;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;
