import { useEffect, useState } from 'react';
import { Album, AlbumData } from '../common/dataTypes';
import { fetchImage, fetchImageNoCors } from '../utils/data/albumImageFetcher';

export const useGraphicOverviewImage = (album: Album) => {
	const [graphicOverviewImage, setGraphicOverviewImage] = useState('');

	// Fetch higer resolution of the image and hot-swap it on the fly
	useEffect(() => {
		const fetchGraphicOverviewImage = async () => {
			const graphicOverview = await fetchImageNoCors(
				`https://hatechnolog.com/static/syncover/images/${album.id}.png`,
			);
			setGraphicOverviewImage(graphicOverview);
		};

		fetchGraphicOverviewImage();
	}, [album]);

	return {
		graphicOverviewImage,
	};
};
