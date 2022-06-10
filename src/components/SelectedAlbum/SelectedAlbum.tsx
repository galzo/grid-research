import React, { FC, useCallback, useMemo } from 'react';
import { OverlayBackground, OverlayWrapper, AlbumContent } from './SelectedAlbum.styles';
import { ISelectedAlbumProps } from './SelectedAlbum.types';
import { SimilarAlbums } from './SimilarAlbums/SimilarAlbums';
import { AlbumDetails } from './AlbumDetails/AlbumDetails';
import { resolveSimilarAlbums } from '../../utils/data/albumDataMapper';
import { AlbumImage } from './AlbumImage/AlbumImage';
import { AlbumHeader } from './AlbumHeader/AlbumHeader';

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

	const shuffleSimilarAlbum = useCallback(() => {
		const albumIds =
			similarAlbums
				.map((album) => album.id)
				.filter((id) => id !== selectedAlbum?.id) ?? [];

		onShuffle(albumIds);
	}, [onShuffle, selectedAlbum?.id, similarAlbums]);

	if (!selectedAlbum || !albumPosition) return null;

	return (
		<OverlayWrapper>
			<AlbumHeader
				onCloseClick={onDismiss}
				onShuffleClick={shuffleSimilarAlbum}
			/>
			<AlbumContent>
				<AlbumImage album={selectedAlbum} position={albumPosition} />
				<AlbumDetails album={selectedAlbum} />
			</AlbumContent>
			<SimilarAlbums
				selectedAlbum={selectedAlbum}
				albums={similarAlbums}
				onClick={onSelect}
			/>
			<OverlayBackground />
		</OverlayWrapper>
	);
};
