import { useEffect, useMemo, useState } from 'react';
import { AlbumId, AlbumData } from '../common/dataTypes';
import { fetchAlbums } from '../utils/data/albumDataLoader';
import { fetchAlbumImages } from '../utils/data/albumImageFetcher';
import { buildAlbumDataMapping } from '../utils/data/albumDataMapper';

export const useAlbumsData = (limitAlbumsCount?: number) => {
	const [albumsData, setAlbumsData] = useState<Record<AlbumId, AlbumData>>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadTask = async () => {
			const albums = await fetchAlbums(limitAlbumsCount);
			const albumImages = await fetchAlbumImages(albums);
			const albumsDataMapping = buildAlbumDataMapping(
				albums,
				albumImages,
			);
			setAlbumsData(albumsDataMapping);
			setIsLoading(false);
		};

		loadTask();
	}, [limitAlbumsCount]);

	return {
		isLoading,
		albums: albumsData,
	};
};
