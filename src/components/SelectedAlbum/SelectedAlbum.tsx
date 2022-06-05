import React, { FC } from 'react';
import { SelectedAlbumItem } from './SelectedAlbumItem/SelectedAlbumItem';
import { OverlayBackground, OverlayWrapper } from './SelectedAlbum.styles';
import { ISelectedAlbumProps } from './SelectedAlbum.types';
import { RelatedAlbums } from './RelatedAlbums/RelatedAlbums';
import { AlbumDetails } from './AlbumDetails/AlbumDetails';

export const SelectedAlbum: FC<ISelectedAlbumProps> = ({
	selectedAlbum,
	albumPosition,
	onDismiss,
}) => {
	if (!selectedAlbum || !albumPosition) return null;
	return (
		<OverlayWrapper>
			<SelectedAlbumItem
				album={selectedAlbum}
				position={albumPosition}
				onDismiss={onDismiss}
			/>
			<AlbumDetails album={selectedAlbum} />
			<RelatedAlbums />
			<OverlayBackground />
		</OverlayWrapper>
	);
};
