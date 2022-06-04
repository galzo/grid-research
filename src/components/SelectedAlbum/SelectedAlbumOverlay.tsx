import React from 'react';
import { SelectedAlbumItem } from './SelectedAlbumItem/SelectedAlbumItem';
import { OverlayBackground } from './SelectedAlbumOverlay.styles';
import { ISelectedAlbumOverlayProps } from './SelectedAlbumOverlay.types';

export const SelectedAlbumOverlay: React.FunctionComponent<
	ISelectedAlbumOverlayProps
> = ({ selectedAlbum, albumPosition }) => {
	if (!selectedAlbum || !albumPosition) return null;
	return (
		<>
			<SelectedAlbumItem album={selectedAlbum} position={albumPosition} />
			<OverlayBackground />
		</>
	);
};
