import * as React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { Album } from '../../../../common/dataTypes';
import exampleGraphicOverview from '../../../../assets/exampleGraphicOveview.png';
import { FadeInDiv } from '../../../Base/FadeInDiv';
import { Characteristics } from './Characteristics/Characteristics';
import {
	GraphicOverviewContainer,
	GraphicOverviewImage,
} from './GraphicOverview.styles';

interface GraphicOverviewProps {
	album: Album;
}

export const GraphicOverview: FC<GraphicOverviewProps> = ({ album }) => {
	return (
		<GraphicOverviewContainer>
			<Characteristics album={album} />
			<GraphicOverviewImage src={exampleGraphicOverview} />
		</GraphicOverviewContainer>
	);
};
