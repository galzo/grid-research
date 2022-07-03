import styled from 'styled-components';
import { FadeInDiv } from '../../../Base/FadeInDiv';

export const TextureContainer = styled(FadeInDiv)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	z-index: 6;
`;

export const TextureTitle = styled.div`
	font-weight: 400;
	padding-top: 8px;
	font-size: 14px;
	color: white;
	font-weight: 700;
	margin-right: 16px;
`;

export const TextureImage = styled.img`
	width: 28px;
	height: 28px;

	@media (max-width: 1799px) {
		width: 24px;
		height: 24px;
	}

	border: 1px solid #ffffff;
	margin-right: 10px;
	border-radius: 4px;
	animation: fadeIn 3s;
	-webkit-animation: fadeIn 3s;
	-moz-animation: fadeIn 3s;
	-o-animation: fadeIn 3s;
	-ms-animation: fadeIn 3s;
`;
