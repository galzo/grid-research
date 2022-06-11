import React, { FC, useCallback, useContext, useEffect, useMemo } from 'react';
import {
	OverlayBackground,
	OverlayWrapper,
	AlbumContent,
} from './SelectedAlbum.styles';
import { ISelectedAlbumProps } from './SelectedAlbum.types';
import { SimilarAlbums } from './SimilarAlbums/SimilarAlbums';
import { AlbumDetails } from './AlbumDetails/AlbumDetails';
import { resolveSimilarAlbums } from '../../utils/data/albumDataMapper';
import { AlbumImage } from './AlbumImage/AlbumImage';
import { AlbumHeader } from './AlbumHeader/AlbumHeader';
import { MusicPlayer } from './MusicPlayer/MusicPlayer';
import { YoutubePlayerContext } from '../YoutubePlayer/YoutubePlayerContext';

export const SelectedAlbum: FC<ISelectedAlbumProps> = ({
	selectedAlbum,
	albumPosition,
	onDismiss,
	allAlbums,
	onSelect,
	onShuffle,
}) => {
	const { toggleVideoPlay } = useContext(YoutubePlayerContext);

	const similarAlbums = useMemo(() => {
		if (!selectedAlbum || !allAlbums) return [];
		return resolveSimilarAlbums(allAlbums, selectedAlbum);
	}, [selectedAlbum, allAlbums]);

	const shuffleSimilarAlbum = useCallback(() => {
		const albumIds =
			similarAlbums
				.map((album) => album.id)
				.filter((id) => id !== selectedAlbum?.id) ?? [];

		onShuffle(albumIds);
	}, [onShuffle, selectedAlbum?.id, similarAlbums]);

	useEffect(() => {
		const handleKeyboard = (event: any) => {
			// Escape button click
			if (event.key === 'Escape') {
				onDismiss();
			}

			// Spacebar button click
			if (event.keyCode === 32) {
				toggleVideoPlay();
			}
		};

		document.addEventListener('keydown', handleKeyboard, false);
		return () => {
			document.removeEventListener('keydown', handleKeyboard);
		};
	}, [onDismiss, toggleVideoPlay]);

	if (!selectedAlbum || !albumPosition) return null;

	return (
		<OverlayWrapper>
			<AlbumHeader
				onCloseClick={onDismiss}
				onShuffleClick={shuffleSimilarAlbum}
			/>
			<AlbumContent>
				<AlbumImage album={selectedAlbum} position={albumPosition} />
				<AlbumDetails album={selectedAlbum} />
			</AlbumContent>
			<SimilarAlbums
				selectedAlbum={selectedAlbum}
				albums={similarAlbums}
				onClick={onSelect}
			/>
			<OverlayBackground />
		</OverlayWrapper>
	);
};
