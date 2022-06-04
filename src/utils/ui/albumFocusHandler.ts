import { Album } from '../../common/dataTypes';

export const resolveFocusDetails = (album: Album, focusedAlbum?: Album) => {
	if (!focusedAlbum) {
		return { isFocused: false, isNeighbour: false };
	}

	const isFocused = album.id === focusedAlbum.id;
	return {
		isFocused,
		isNeighbour: false,
	};
};
