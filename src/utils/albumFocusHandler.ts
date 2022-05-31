import { AlbumDetails } from '../common/dataTypes';

export const resolveFocusDetails = (
	album: AlbumDetails,
	focusedAlbum?: AlbumDetails,
) => {
	if (!focusedAlbum) {
		return { isFocused: false, isNeighbour: false };
	}

	const isFocused = album.id === focusedAlbum.id;
	return {
		isFocused,
		isNeighbour: false,
	};
};
