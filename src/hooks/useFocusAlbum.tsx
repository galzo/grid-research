import { useCallback, useEffect, useState } from 'react';
import { AlbumData } from '../common/dataTypes';

export const useFocusAlbum = (izZoomedOut: boolean) => {
	const [focusedAlbum, setFocusedAlbum] = useState<AlbumData>();
	const [disableFocus, setDisableFocus] = useState(true);

	const handleFocusAlbum = useCallback(
		(album?: AlbumData) => {
			if (izZoomedOut || disableFocus) return;

			setFocusedAlbum(album);
		},
		[disableFocus, izZoomedOut],
	);

	useEffect(() => {
		setTimeout(() => {
			setDisableFocus(false);
		}, 1500);
	}, []);

	return {
		focusedAlbum,
		handleFocusAlbum,
	};
};
