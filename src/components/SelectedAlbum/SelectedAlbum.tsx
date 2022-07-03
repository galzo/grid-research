import { FC, useContext, useEffect } from 'react';
import {
	OverlayBackground,
	OverlayWrapper,
	AlbumContent,
} from './SelectedAlbum.styles';
import { ISelectedAlbumProps } from './SelectedAlbum.types';
import { SimilarAlbums } from './SimilarAlbums/SimilarAlbums';
import { AlbumDetails } from './AlbumDetails/AlbumDetails';
import { AlbumImage } from './AlbumImage/AlbumImage';
import { AlbumHeader } from './AlbumHeader/AlbumHeader';
import { YoutubePlayerContext } from '../YoutubePlayer/YoutubePlayerContext';

export const SelectedAlbum: FC<ISelectedAlbumProps> = ({
	selectedAlbum,
	albumPosition,
	onDismiss,
	allAlbums,
	onSelect,
	onShuffle,
}) => {
	const { setVideoId, toggleVideoPlay, videoId } =
		useContext(YoutubePlayerContext);

	useEffect(() => {
		if (
			selectedAlbum &&
			setVideoId &&
			selectedAlbum.youtubeId !== videoId
		) {
			setVideoId(selectedAlbum.youtubeId);
		}
	}, [selectedAlbum, setVideoId, toggleVideoPlay, videoId]);

	useEffect(() => {
		const handleKeyboard = (event: any) => {
			// Escape button click
			if (event.key === 'Escape') {
				onDismiss();
			}

			// Spacebar button click
			if (event.keyCode === 32) {
				toggleVideoPlay();
				event.preventDefault();
			}
		};

		document.addEventListener('keydown', handleKeyboard, false);
		return () => {
			document.removeEventListener('keydown', handleKeyboard);
		};
	}, [onDismiss, toggleVideoPlay]);

	if (!selectedAlbum || !albumPosition) return null;

	// get similar albums
	const similarAlbums = selectedAlbum?.similarAlbums.map(
		(id) => allAlbums[id],
	);

	return (
		<OverlayWrapper>
			<AlbumHeader onCloseClick={onDismiss} onShuffleClick={onShuffle} />
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
