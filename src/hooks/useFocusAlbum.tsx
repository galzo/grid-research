import { useCallback, useEffect, useState } from 'react';
import { AlbumData } from '../common/dataTypes';

export const useFocusAlbum = () => {
	const [focusedAlbum, setFocusedAlbum] = useState<AlbumData>();
	const [disableFocus, setDisableFocus] = useState(true);

	const handleFocusAlbum = useCallback(
		(album?: AlbumData) => {
			if (disableFocus) return;

			setFocusedAlbum(album);
		},
		[disableFocus],
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
