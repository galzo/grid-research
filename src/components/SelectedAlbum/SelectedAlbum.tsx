import React, { FC, useMemo } from 'react';
import { SelectedAlbumItem } from './SelectedAlbumItem/SelectedAlbumItem';
import { OverlayBackground, OverlayWrapper } from './SelectedAlbum.styles';
import { ISelectedAlbumProps } from './SelectedAlbum.types';
import { RelatedAlbums } from './RelatedAlbums/RelatedAlbums';
import { AlbumDetails } from './AlbumDetails/AlbumDetails';
import { resolveRelatedAlbums } from '../../utils/data/albumDataMapper';

export const SelectedAlbum: FC<ISelectedAlbumProps> = ({
	selectedAlbum,
	albumPosition,
	onDismiss,
	allAlbums,
}) => {
	const relatedAlbums = useMemo(() => {
		if (!selectedAlbum || !allAlbums) return [];
		return resolveRelatedAlbums(allAlbums, selectedAlbum);
	}, [selectedAlbum, allAlbums]);

	console.log('related are', relatedAlbums);

	if (!selectedAlbum || !albumPosition) return null;

	return (
		<OverlayWrapper>
			<SelectedAlbumItem
				album={selectedAlbum}
				position={albumPosition}
				onDismiss={onDismiss}
			/>
			<AlbumDetails album={selectedAlbum} />
			<RelatedAlbums albums={relatedAlbums} />
			<OverlayBackground />
		</OverlayWrapper>
	);
};
