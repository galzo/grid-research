import styled from 'styled-components';
import { FadeInDiv } from '../../../Base/FadeInDiv';

export const GraphicOverviewContainer = styled(FadeInDiv)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 70px;
	@media (max-width: 1799px) {
		transform: scale(0.8);
	}
`;

export const GraphicOverviewImage = styled.img`
	width: 397px;
	height: 378px;
`;
