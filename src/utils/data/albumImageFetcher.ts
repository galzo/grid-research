import pLimit from 'p-limit';
import { Album, AlbumImage } from '../../common/dataTypes';

const fetchAlbumImage = async (album: Album): Promise<AlbumImage> => {
	const res = await fetch(album.thumbnails.small);
	const imageBlob = await res.blob();
	const imageObjectURL = URL.createObjectURL(imageBlob);
	return {
		id: album.id,
		image: imageObjectURL,
	};
};

export const fetchAlbumImages = async (albums: Album[]) => {
	const limit = pLimit(50);
	const fetchTasks = Object.values(albums).map((album, index) => {
		return limit(() => {
			console.log('loading', index);
			return fetchAlbumImage(album);
		});
	});

	return Promise.all(fetchTasks);
};
