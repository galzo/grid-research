import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { resolveAlbumSubtitle } from '../../../utils/ui/albumDetailsHandler';
import { AlbumColors } from './AlbumColors/AlbumColors';
import {
	AlbumDetailsContainer,
	Subtitle,
	Title,
	TitleContainer,
} from './SelectedAlbumDetails.styles';

interface IAlbumDetailsProps {
	album: AlbumData;
}

export const SelectedAlbumDetails: FC<IAlbumDetailsProps> = ({ album }) => {
	const subtitleContent = useMemo(() => {
		return resolveAlbumSubtitle(album);
	}, [album]);

	return (
		<AlbumDetailsContainer>
			<TitleContainer>
				<Title>{album.albumName}</Title>
				<Subtitle>{subtitleContent}</Subtitle>
			</TitleContainer>
			<AlbumColors album={album} />
		</AlbumDetailsContainer>
	);
};
