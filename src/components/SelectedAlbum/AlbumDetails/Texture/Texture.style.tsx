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
	font-family: 'Gotham-medium';
	color: white;
	margin-right: 16px;
`;

export const TextureImage = styled.img`
	width: 28px;
	height: 28px;
	border: 1px solid #ffffff;
	margin-right: 10px;
	border-radius: 4px;
	animation: fadeIn 3s;
	-webkit-animation: fadeIn 3s;
	-moz-animation: fadeIn 3s;
	-o-animation: fadeIn 3s;
	-ms-animation: fadeIn 3s;
`;
