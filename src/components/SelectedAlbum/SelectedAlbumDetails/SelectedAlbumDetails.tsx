import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { resolveAlbumSubtitle } from '../../../utils/ui/albumDetailsHandler';
import { AlbumColors } from './AlbumColors/AlbumColors';
import { AlbumTitle } from './AlbumTitle/AlbumTitle';
import { GraphicOverview } from './GraphicOverview/GraphicOverview';
import { AlbumDetailsContainer } from './SelectedAlbumDetails.styles';

interface IAlbumDetailsProps {
	album: AlbumData;
}

export const SelectedAlbumDetails: FC<IAlbumDetailsProps> = ({ album }) => {
	return (
		<AlbumDetailsContainer>
			<AlbumTitle album={album} />
			<AlbumColors album={album} />
			<GraphicOverview album={album} />
		</AlbumDetailsContainer>
	);
};
