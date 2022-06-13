import { Album, AlbumId, AlbumImage, AlbumData } from '../../common/dataTypes';

export const buildAlbumDataMapping = (
	albums: Album[],
	albumImages: AlbumImage[],
): Record<AlbumId, AlbumData> => {
	return albums.reduce<Record<AlbumId, AlbumData>>((res, album) => {
		const albumData = {
			...album,
			image: albumImages.find((image) => album.id === image.id)?.image,
			similarAlbums: [],
		};

		return {
			...res,
			[album.id as AlbumId]: albumData,
		};
	}, {});
};

export const resolveSimilarAlbums = (
	allAlbums: Record<AlbumId, AlbumData>,
	selectedAlbum: AlbumData,
) => {
	const similarAlbumIds = selectedAlbum.similarAlbums;
	const similarAlbums = similarAlbumIds.map((id) => {
		return allAlbums[id];
	});
	return similarAlbums;
};
