import { AlbumData } from '../../common/dataTypes';

export const resolveAlbumSubtitle = (album: AlbumData) => {
	const artistName = album.artistName ? `${album.artistName}` : '';
	const albumReleaseYear = album.releaseYear ? ` | ${album.releaseYear}` : '';
	const albumGenre = album.genre ? ` | ${album.genre}` : '';

	return `${artistName}${albumReleaseYear}${albumGenre}`;
};
