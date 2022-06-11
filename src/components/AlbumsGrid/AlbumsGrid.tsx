import {
	FC,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import styled from 'styled-components';
import { shuffle } from 'lodash';
import { AlbumItem } from './AlbumItem/AlbumItem';
import { Album, AlbumData, AlbumId } from '../../common/dataTypes';
import { IAlbumsGridProps } from './AlbumsGrid.types';
import { DEFAULT_GRID_TILE_SIZE } from '../../common/consts';
import {
	isFocusedOrSimilar,
	resolveFocusDetails,
} from '../../utils/ui/albumFocusHandler';
import { GridWrapper } from './AlbumsGrid.styles';
import { GridItemPosition } from '../../common/uiTypes';
import { SelectedAlbum } from '../SelectedAlbum/SelectedAlbum';
import { useFocusAlbum } from '../../hooks/useFocusAlbum';
import { YoutubePlayerContext } from '../YoutubePlayer/YoutubePlayerContext';

export const AlbumsGrid: FC<IAlbumsGridProps> = ({
	albums,
	tileSize = DEFAULT_GRID_TILE_SIZE,
}) => {
	const [isZoomedOut, setIsZoomedOut] = useState(false);
	const { focusedAlbum, handleFocusAlbum } = useFocusAlbum(isZoomedOut);
	const [selectedAlbum, setSelectedAlbum] = useState<AlbumData>();
	const [selectedPosition, setSelectedPosition] =
		useState<GridItemPosition>();
	const { setVideoId, isPlaying, toggleVideoPlay } =
		useContext(YoutubePlayerContext);

	const containerDivRef = useCallback((node: any) => {
		if (node !== null) {
			window.scrollTo(250, 500);
		}
	}, []);

	const handleClickGridAlbum = useCallback(
		(album: AlbumData, position: GridItemPosition) => {
			const shouldSelectAlbum = isZoomedOut
				? isFocusedOrSimilar(album, focusedAlbum)
				: true;
			if (shouldSelectAlbum) {
				handleFocusAlbum(undefined);
				setSelectedAlbum(album);
				setSelectedPosition(position);
				setVideoId(album.youtubeId);
			}

			setIsZoomedOut(false);
		},
		[focusedAlbum, handleFocusAlbum, isZoomedOut, setVideoId],
	);

	const handleSelectRelatedAlbum = useCallback(
		(album: AlbumData) => {
			setSelectedAlbum(album);
			setVideoId(album.youtubeId);
		},
		[setVideoId],
	);

	const handleShuffleAlbum = useCallback(
		(albumIds: AlbumId[]) => {
			if (!albumIds || albumIds.length <= 0) {
				return;
			}

			const randomAlbumId = shuffle(albumIds)[0];
			const randomAlbum = albums[randomAlbumId];
			handleSelectRelatedAlbum(randomAlbum);
		},
		[albums, handleSelectRelatedAlbum],
	);

	const handleDismiss = useCallback(() => {
		setSelectedAlbum(undefined);
		setSelectedPosition(undefined);
		setVideoId('');
	}, [setVideoId]);

	const handleZoomOutClick = useCallback(() => {
		setIsZoomedOut(true);
	}, []);

	const GridMatrix = useMemo(() => {
		if (!albums) {
			return [];
		}

		const albumItems = Object.values(albums).map((album, index) => {
			const focus = resolveFocusDetails(album, focusedAlbum);
			return (
				<AlbumItem
					key={album.id}
					album={album}
					albumIndex={index}
					onHover={handleFocusAlbum}
					onClick={handleClickGridAlbum}
					onZoomOut={handleZoomOutClick}
					isFocused={focus.isFocused}
					isRelated={focus.isRelated}
					itemSize={tileSize}
					isGridZoomedOut={isZoomedOut}
				/>
			);
		});

		return albumItems;
	}, [
		albums,
		focusedAlbum,
		handleClickGridAlbum,
		handleFocusAlbum,
		handleZoomOutClick,
		isZoomedOut,
		tileSize,
	]);

	if (GridMatrix.length <= 0) {
		return null;
	}

	return (
		<GridWrapper
			ref={containerDivRef}
			size={tileSize}
			isZoomedOut={isZoomedOut}
		>
			<SelectedAlbum
				selectedAlbum={selectedAlbum}
				albumPosition={selectedPosition}
				onDismiss={handleDismiss}
				onSelect={handleSelectRelatedAlbum}
				onShuffle={handleShuffleAlbum}
				allAlbums={albums}
			/>
			{GridMatrix}
		</GridWrapper>
	);
};
