import { Album, AlbumId, AlbumImage, AlbumData } from '../../common/dataTypes';

export const buildAlbumDataMapping = (
	albums: Album[],
	albumImages: AlbumImage[],
): Record<AlbumId, AlbumData> => {
	return albums.reduce<Record<AlbumId, AlbumData>>((res, album) => {
		const albumData = {
			...album,
			image: albumImages.find((image) => album.id === image.id)?.image,
			relatedAlbums: [
				albums[Math.round(Math.random() * 300)].id,
				albums[Math.round(Math.random() * 200)].id,
				albums[Math.round(Math.random() * 100)].id,
				albums[Math.round(Math.random() * 50)].id,
				albums[Math.round(Math.random() * 150)].id,
				albums[Math.round(Math.random() * 350)].id,
				albums[Math.round(Math.random() * 320)].id,
				albums[Math.round(Math.random() * 120)].id,
				albums[Math.round(Math.random() * 111)].id,
				albums[Math.round(Math.random() * 400)].id,
			],
		};

		return {
			...res,
			[album.id as AlbumId]: albumData,
		};
	}, {});
};

export const resolveRelatedAlbums = (
	allAlbums: Record<AlbumId, AlbumData>,
	selectedAlbum: AlbumData,
) => {
	const relatedAlbumIds = selectedAlbum.relatedAlbums;
	const relatedAlbums = relatedAlbumIds.map((id) => {
		return allAlbums[id];
	});
	return relatedAlbums;
};
