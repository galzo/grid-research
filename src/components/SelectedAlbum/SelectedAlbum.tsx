import React, { FC, useMemo } from 'react';
import { SelectedAlbumItem } from './SelectedAlbumItem/SelectedAlbumItem';
import { OverlayBackground, OverlayWrapper } from './SelectedAlbum.styles';
import { ISelectedAlbumProps } from './SelectedAlbum.types';
import { RelatedAlbums } from './RelatedAlbums/RelatedAlbums';
import { SelectedAlbumDetails } from './SelectedAlbumDetails/SelectedAlbumDetails';
import { resolveRelatedAlbums } from '../../utils/data/albumDataMapper';

export const SelectedAlbum: FC<ISelectedAlbumProps> = ({
	selectedAlbum,
	albumPosition,
	onDismiss,
	allAlbums,
	onSelect,
	onShuffle,
}) => {
	const relatedAlbums = useMemo(() => {
		if (!selectedAlbum || !allAlbums) return [];
		return resolveRelatedAlbums(allAlbums, selectedAlbum);
	}, [selectedAlbum, allAlbums]);

	if (!selectedAlbum || !albumPosition) return null;

	return (
		<OverlayWrapper>
			<SelectedAlbumItem
				album={selectedAlbum}
				position={albumPosition}
				onDismiss={onDismiss}
			/>
			<SelectedAlbumDetails album={selectedAlbum} />
			<RelatedAlbums
				albums={relatedAlbums}
				onClick={onSelect}
				onShuffleClick={onShuffle}
			/>
			<OverlayBackground />
		</OverlayWrapper>
	);
};
