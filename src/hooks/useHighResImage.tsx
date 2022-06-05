import { useEffect, useState } from 'react';
import { AlbumData } from '../common/dataTypes';
import { fetchImage } from '../utils/data/albumImageFetcher';

export const useHighResImage = (album: AlbumData) => {
	const [albumImage, setAlbumImage] = useState(album.image);

	// Fetch higer resolution of the image and hot-swap it on the fly
	useEffect(() => {
		const fetchLargeImage = async () => {
			const highResImage = await fetchImage(album.thumbnails.large);
			setAlbumImage(highResImage);
		};

		fetchLargeImage();
	}, [album]);

	return {
		albumImage,
	};
};
