import { useCallback, useEffect, useState } from 'react';
import { AlbumData } from '../common/dataTypes';

export const useFocusAlbum = (izZoomedOut: boolean) => {
	const [focusedAlbum, setFocusedAlbum] = useState<AlbumData>();

	const handleFocusAlbum = useCallback(
		(album?: AlbumData) => {
			if (izZoomedOut) return;

			setFocusedAlbum(album);
		},
		[izZoomedOut],
	);

	return {
		focusedAlbum,
		handleFocusAlbum,
	};
};
