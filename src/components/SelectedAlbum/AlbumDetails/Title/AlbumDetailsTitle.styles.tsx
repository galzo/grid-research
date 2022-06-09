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
	font-weight: 400;
	font-family: 'Gotham';
	margin-bottom: 24px;
	text-align: left;
`;

export const Subtitle = styled.span`
	font-size: 18px;
	color: rgba(255, 255, 255, 0.8);
	font-weight: 400;
	font-family: 'Gotham-book';
`;
