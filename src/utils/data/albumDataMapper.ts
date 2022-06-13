import { Album, AlbumId, AlbumImage, AlbumData } from '../../common/dataTypes';

export const buildAlbumDataMapping = (
	albums: Album[],
	albumImages: AlbumImage[],
): Record<AlbumId, AlbumData> => {
	const allAlbumIds = albums.map((album) => album.id);

	return albums.reduce<Record<AlbumId, AlbumData>>((res, album) => {
		const validSimilarAlbums = album.similarAlbums.filter(
			(similarAlbumId) => allAlbumIds.includes(similarAlbumId),
		);

		const albumData = {
			...album,
			similarAlbums: validSimilarAlbums,
			image: albumImages.find((image) => album.id === image.id)?.image,
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
