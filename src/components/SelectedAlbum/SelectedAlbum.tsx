import React, { FC, useMemo } from 'react';
import { AlbumImage } from './AlbumImage/AlbumImage';
import { OverlayBackground, OverlayWrapper } from './SelectedAlbum.styles';
import { ISelectedAlbumProps } from './SelectedAlbum.types';
import { SimilarAlbums } from './SimilarAlbums/SimilarAlbums';
import { AlbumDetails } from './AlbumDetails/AlbumDetails';
import { resolveSimilarAlbums } from '../../utils/data/albumDataMapper';

export const SelectedAlbum: FC<ISelectedAlbumProps> = ({
	selectedAlbum,
	albumPosition,
	onDismiss,
	allAlbums,
	onSelect,
	onShuffle,
}) => {
	const similarAlbums = useMemo(() => {
		if (!selectedAlbum || !allAlbums) return [];
		return resolveSimilarAlbums(allAlbums, selectedAlbum);
	}, [selectedAlbum, allAlbums]);

	if (!selectedAlbum || !albumPosition) return null;

	return (
		<OverlayWrapper>
			<AlbumImage
				album={selectedAlbum}
				position={albumPosition}
				onDismiss={onDismiss}
			/>
			<AlbumDetails album={selectedAlbum} />
			<SimilarAlbums
				selectedAlbum={selectedAlbum}
				albums={similarAlbums}
				onClick={onSelect}
				onShuffleClick={onShuffle}
			/>
			<OverlayBackground />
		</OverlayWrapper>
	);
};
