import { useCallback, useEffect, useState } from 'react';
import { AlbumData } from '../common/dataTypes';

export const useFocusAlbum = () => {
	const [focusedAlbum, setFocusedAlbum] = useState<AlbumData>();
	// const [disableFocus, setDisableFocus] = useState(true);

	const handleFocusAlbum = useCallback(
		(album?: AlbumData) => {
			setFocusedAlbum(album);
		},
		[],
	);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setDisableFocus(false);
	// 	}, 1500);
	// }, []);

	return {
		focusedAlbum,
		handleFocusAlbum,
	};
};
