import React, { FC } from 'react';
import { SelectedAlbumItem } from './SelectedAlbumItem/SelectedAlbumItem';
import {
	OverlayBackground,
	OverlayWrapper,
} from './SelectedAlbumOverlay.styles';
import { ISelectedAlbumOverlayProps } from './SelectedAlbumOverlay.types';

export const SelectedAlbumOverlay: FC<ISelectedAlbumOverlayProps> = ({
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
			<OverlayBackground />
		</OverlayWrapper>
	);
};
