import * as React from 'react';
import { FC, useMemo } from 'react';
import styled from 'styled-components';
import { shuffle } from 'lodash';
import { Album } from '../../../../common/dataTypes';
import exampleGraphicOverview from '../../../../assets/exampleGraphicOveview.png';
import exampleGraphicOverview2 from '../../../../assets/exampleGraphicOveview2.png';
import exampleGraphicOverview3 from '../../../../assets/exampleGraphicOveview3.png';
import exampleGraphicOverview4 from '../../../../assets/exampleGraphicOveview4.png';
import { FadeInDiv } from '../../../Base/FadeInDiv';
import { Characteristics } from './Characteristics/Characteristics';
import {
	GraphicOverviewContainer,
	GraphicOverviewImage,
} from './GraphicOverview.styles';
import { useGraphicOverviewImage } from '../../../../hooks/useGraphicOverviewImage';

interface GraphicOverviewProps {
	album: Album;
}

export const GraphicOverview: FC<GraphicOverviewProps> = ({ album }) => {
	return (
		<GraphicOverviewContainer>
			<Characteristics album={album} />
			<GraphicOverviewImage
				src={`https://hatechnolog.com/static/syncover/images/${album.id}.png`}
			/>
		</GraphicOverviewContainer>
	);
};
