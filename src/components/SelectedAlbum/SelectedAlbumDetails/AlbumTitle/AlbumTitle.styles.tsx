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
	margin-bottom: 10px;
`;

export const Subtitle = styled.span`
	font-size: 16px;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-light';
`;
