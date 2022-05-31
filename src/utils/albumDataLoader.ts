import albumsJson from '../assets/albumsData.json';
import { AlbumDetails, AlbumId, RawAlbumData } from '../common/dataTypes';

const adaptAlbumData = (id: AlbumId, albumData: any): AlbumDetails => {
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

export const getAlbumsData = (): Record<AlbumId, AlbumDetails> => {
	return Object.entries(albumsJson).reduce((res, [id, album]) => {
		const adaptedAlbum = adaptAlbumData(id, album);
		return { ...res, [id]: adaptedAlbum };
	}, {});
};
