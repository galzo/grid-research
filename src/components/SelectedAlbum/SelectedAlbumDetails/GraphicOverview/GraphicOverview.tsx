import * as React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { Album } from '../../../../common/dataTypes';
import exampleGraphicOverview from '../../../../assets/exampleGraphicOveview.png';
import { FadeInDiv } from '../../../Base/FadeInDiv';

interface GraphicOverviewProps {
	album: Album;
}

const GraphicOverviewContainer = styled(FadeInDiv)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GraphicOverviewImage = styled.img`
	width: 397px;
	height: 397px;
`;

export const GraphicOverview: FC<GraphicOverviewProps> = ({ album }) => {
	return (
		<GraphicOverviewContainer>
			<GraphicOverviewImage src={exampleGraphicOverview} />
		</GraphicOverviewContainer>
	);
};
