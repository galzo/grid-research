// import albumsJson from '../assets/albumsData.json';
import { Album, AlbumId, RawAlbumData } from '../../common/dataTypes';
import { adaptAlbumColors } from './albumColorsHandler';
import { getYoutubeVideoIdFromURL } from './youtubeVideoHandler';

const adaptAlbum = (id: AlbumId, albumData: any): Album => {
	return {
		id,
		albumName: albumData.album_name,
		trackName: albumData.track_name,
		artistName: albumData.artist_name,
		releaseYear: albumData.release_year,
		genre: albumData.genre,
		thumbnails: {
			small: albumData.small_thumbnail,
			large: albumData.big_thumbnail,
		},
		colors: adaptAlbumColors(albumData.colors),
		isPhotography: albumData.photography && albumData.photography === 1,
		isDrawing: albumData.drawing && albumData.drawing === 1,
		isFashion: albumData.fashion && albumData.fashion === 1,
		isGeometric: albumData.geometric && albumData.geometric === 1,
		isMusical: albumData.musical && albumData.musical === 1,
		isUrban: albumData.urban && albumData.urban === 1,
		youtubeUrl: albumData.youtube_link,
		youtubeId: getYoutubeVideoIdFromURL(albumData.youtube_link) ?? '',
		similarAlbums: albumData.ns || [],
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
