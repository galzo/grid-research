import { FC } from 'react';
import { Album } from '../../../../common/dataTypes';
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
			<GraphicOverviewImage
				src={`https://hatechnolog.com/static/syncover/images/${album.id}.png`}
			/>
		</GraphicOverviewContainer>
	);
};
