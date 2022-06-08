import pLimit from 'p-limit';
import { Album, AlbumImage } from '../../common/dataTypes';

export const fetchImage = async (url: string): Promise<string> => {
	const res = await fetch(url);
	const imageBlob = await res.blob();
	const imageObjectURL = URL.createObjectURL(imageBlob);
	return imageObjectURL;
};

export const fetchImageNoCors = async (url: string): Promise<string> => {
	const res = await fetch(url, { mode: 'no-cors' });
	const imageBlob = await res.blob();
	const imageObjectURL = URL.createObjectURL(imageBlob);
	return imageObjectURL;
};

export const fetchAlbumImages = async (albums: Album[]) => {
	const limit = pLimit(50);
	const fetchTasks = Object.values(albums).map((album, index) => {
		return limit(async () => {
			const image = await fetchImage(album.thumbnails.small);
			return {
				id: album.id,
				image,
			};
		});
	});

	return Promise.all(fetchTasks);
};
