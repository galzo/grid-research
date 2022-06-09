import { FC } from 'react';
import { AlbumData } from '../../../common/dataTypes';
import { AlbumColors } from './AlbumColors/AlbumColors';
import { AlbumDetailsTitle } from './Title/AlbumDetailsTitle';
import { GraphicOverview } from './GraphicOverview/GraphicOverview';
import { AlbumDetailsContainer, ColorContainer } from './AlbumDetails.styles';
import { Texture } from './Texture/Texture';

interface IAlbumDetailsProps {
	album: AlbumData;
}

export const AlbumDetails: FC<IAlbumDetailsProps> = ({ album }) => {
	return (
		<AlbumDetailsContainer>
			<AlbumDetailsTitle album={album} />
			<ColorContainer>
			<AlbumColors album={album} />
			<Texture/>
			</ColorContainer>
			<GraphicOverview album={album} />
		</AlbumDetailsContainer>
	);
};
