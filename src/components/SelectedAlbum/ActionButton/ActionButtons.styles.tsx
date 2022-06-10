import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

export const FlatButtonWrapper = styled(FadeInDiv)`
	height: 48px;
	width: 48px;
	box-sizing: border-box;
	display: flex;
	z-index: 6;
	justify-content: center;
	align-items: center;
	user-select: none;
	cursor: pointer;
`;

export const ButtonWrapper = styled(FadeInDiv)<{isSelected: boolean}>`
	height: 48px;
	width: 48px;
	box-sizing: border-box;
	background: ${({isSelected}) => isSelected ? `rgba(255, 255, 255, 0.5)` : `rgba(255, 255, 255, 0.15)`};
	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 100%;
	box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
	z-index: 6;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 200ms ease-in-out;
	user-select: none;

	&:hover {
		background: ${({isSelected}) => isSelected ? `rgba(255, 255, 255, 0.65)` : `rgba(255, 255, 255, 0.4)`};
		border: 1px solid #ffffff;
		box-shadow: 7.86885px 7.86885px 3.93443px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}
`;
