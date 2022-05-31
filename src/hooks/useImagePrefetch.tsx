// import { useEffect, useMemo } from 'react';
// import {
// 	AlbumDetails,
// 	AlbumId,
// 	AlbumImageFetchTask,
// } from '../common/dataTypes';
// import { fetchImage } from '../utils/imageFetcher';

// const idToImageMapping: Record<AlbumId, string> = {};

// const throttleImageFetching = async (
// 	maxConcurrentRequests: number,
// 	imageFetchTasks: AlbumImageFetchTask[],
// ) => {
// 	// queue up simultaneous calls
// 	const queue: Array<Promise<void>> = [];

// 	for (const fetchTask of imageFetchTasks) {
// 		const promise = fetchTask().then(() => {
// 			queue.splice(queue.indexOf(promise), 1);
// 		});
// 		queue.push(promise);

// 		// if the number of queued requests matches our limit then
// 		// wait for one to finish before enqueueing more
// 		if (queue.length >= maxConcurrentRequests) {
// 			await Promise.race(queue);
// 		}

// 		// wait for the rest of the calls to finish
// 		await Promise.all(queue);
// 	}

// 	console.log(idToImageMapping);
// };

// export const useImagePrefetch = (albumsData: Record<AlbumId, AlbumDetails>) => {
// 	useEffect(() => {
// 		const fetchTasks: AlbumImageFetchTask[] = Object.values(albumsData).map(
// 			(album) => {
// 				return async () => {
// 					const image = await fetchImage(album.thumbnails.small);
// 					idToImageMapping[album.id] = image;
// 				};
// 			},
// 		);

// 		throttleImageFetching(5, fetchTasks);
// 	}, [albumsData, idToImageMapping]);

// 	return {
// 		idToImageMapping,
// 	};
// };
