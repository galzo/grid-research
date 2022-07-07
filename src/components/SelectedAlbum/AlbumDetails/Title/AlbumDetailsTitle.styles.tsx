import styled from 'styled-components';
import { FadeInDiv } from '../../../Base/FadeInDiv';

export const TitleContainer = styled(FadeInDiv)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-bottom: 20px;
`;

export const Title = styled.span`
	font-size: 36px;
	color: #ffffff;
	font-weight: 700;
	margin-bottom: 24px;
	text-align: left;
	user-select: none;

	@media (max-width: 1799px) {
		font-size: 28px;
		margin-bottom: 8px;
	}
`;

export const Subtitle = styled.span`
	font-size: 18px;
	color: rgba(255, 255, 255, 0.8);
	font-weight: 400;
	user-select: none;

	@media (max-width: 1799px) {
		font-size: 16px;
	}
`;
