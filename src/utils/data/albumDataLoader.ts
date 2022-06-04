// import albumsJson from '../assets/albumsData.json';
import { Album, AlbumId, RawAlbumData } from '../../common/dataTypes';

const adaptAlbum = (id: AlbumId, albumData: any): Album => {
	return {
		id,
		albumName: albumData.album_name,
		trackName: albumData.track_name,
		artistName: albumData.artist_name,
		releaseYear: albumData.release_year,
		thumbnails: {
			small: albumData.small_thumbnail,
			large: albumData.big_thumbnail,
		},
	};
};

export const fetchAlbums = async (
	limitAlbumsCount?: number,
): Promise<Album[]> => {
	const albumsJson = await import('../../assets/albumsData.json');

	const albums = Object.entries(albumsJson).map(([id, album]) => {
		return adaptAlbum(id, album);
	});

	return limitAlbumsCount ? albums.slice(0, limitAlbumsCount) : albums;
};
