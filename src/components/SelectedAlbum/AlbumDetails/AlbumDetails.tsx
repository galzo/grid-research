import { FC } from 'react';
import { AlbumData } from '../../../common/dataTypes';
import { AlbumColors } from './AlbumColors/AlbumColors';
import { AlbumDetailsTitle } from './Title/AlbumDetailsTitle';
import { GraphicOverview } from './GraphicOverview/GraphicOverview';
import { AlbumDetailsContainer } from './AlbumDetails.styles';

interface IAlbumDetailsProps {
	album: AlbumData;
}

export const AlbumDetails: FC<IAlbumDetailsProps> = ({ album }) => {
	return (
		<AlbumDetailsContainer>
			<AlbumDetailsTitle album={album} />
			<AlbumColors album={album} />
			<GraphicOverview album={album} />
		</AlbumDetailsContainer>
	);
};
