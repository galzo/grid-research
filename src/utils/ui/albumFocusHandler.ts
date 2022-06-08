import { Album, AlbumData } from '../../common/dataTypes';

export const resolveFocusDetails = (album: Album, focusedAlbum?: AlbumData) => {
	if (!focusedAlbum) {
		return { isFocused: false, isRelated: false };
	}

	const isFocused = album.id === focusedAlbum.id;
	const isRelated = focusedAlbum.similarAlbums.some((id) => album.id === id);
	return {
		isFocused,
		isRelated,
	};
};
