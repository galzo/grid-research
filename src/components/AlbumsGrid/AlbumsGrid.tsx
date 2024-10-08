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
import { AlbumItem, MemoizedAlbumItem } from './AlbumItem/AlbumItem';
import { Album, AlbumData, AlbumId } from '../../common/dataTypes';
import { IAlbumsGridProps } from './AlbumsGrid.types';
import {
	bestAlbumsNeighbors,
	DEFAULT_GRID_TILE_SIZE,
} from '../../common/consts';
import {
	isFocusedOrSimilar,
	resolveFocusDetails,
} from '../../utils/ui/albumFocusHandler';
import {
	GridCloseZoombutton,
	GridSimilarAlbumsTitle,
	GridWrapper,
} from './AlbumsGrid.styles';
import { GridItemPosition } from '../../common/uiTypes';
import { SelectedAlbum } from '../SelectedAlbum/SelectedAlbum';
import { useFocusAlbum } from '../../hooks/useFocusAlbum';
import { YoutubePlayerContext } from '../YoutubePlayer/YoutubePlayerContext';
import { IntroductionPage } from '../OpenPage/OpenPage';
import { GridButton } from '../GridButton/GridButton';
import { ActionButton } from '../SelectedAlbum/ActionButton/ActionButton';
import {MobilePage} from '../MobilePage/MobilePage';

export const AlbumsGrid: FC<IAlbumsGridProps> = ({
	albums,
	tileSize = DEFAULT_GRID_TILE_SIZE,
}) => {
	const [showIntroPage, setShowIntroPage] = useState(true);
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

	const handleOpenIntroPage = useCallback((isOpened: boolean) => {
		setShowIntroPage(isOpened);
	}, []);

	const handleClickGridAlbum = useCallback(
		(album: AlbumData, position: GridItemPosition) => {
			handleFocusAlbum(undefined);
			setSelectedAlbum(album);
			setSelectedPosition(position);
			setIsZoomedOut(false);
		},
		[handleFocusAlbum],
	);

	const handleSelectRelatedAlbum = useCallback(
		(album: AlbumData) => {
			setSelectedAlbum(album);
			setVideoId(album.youtubeId);
		},
		[setVideoId],
	);

	const handleShuffleAlbumSelect = useCallback(() => {
		const randomAlbumId = shuffle(bestAlbumsNeighbors)[0];
		const randomAlbum = albums[randomAlbumId];
		handleSelectRelatedAlbum(randomAlbum);
	}, [albums, handleSelectRelatedAlbum]);

	const handleShuffleAlbumFocus = useCallback(() => {
		const randomAlbumId = shuffle(bestAlbumsNeighbors)[0];
		const randomAlbum = albums[randomAlbumId];
		handleFocusAlbum(randomAlbum);
		setIsZoomedOut(true);
	}, [albums, handleFocusAlbum]);

	const handleDismiss = useCallback(() => {
		setSelectedAlbum(undefined);
		setSelectedPosition(undefined);
		setVideoId('');
	}, [setVideoId]);

	const handleZoomOutClick = useCallback(() => {
		setIsZoomedOut(true);
		window.scrollTo(0, 300);
	}, []);

	useEffect(() => {
		const handleKeyboard = (event: any) => {
			// Escape button click
			if (event.key === 'Escape') {
				setIsZoomedOut(false);
				event.preventDefault();
			}
		};

		document.addEventListener('keydown', handleKeyboard, false);
		return () => {
			document.removeEventListener('keydown', handleKeyboard);
		};
	}, []);

	const GridMatrix = useMemo(() => {
		if (!albums) {
			return [];
		}

		const albumItemsSort = Object.values(albums).sort((a, b) =>
			a.releaseYear > b.releaseYear ? 1 : -1,
		);
		const albumItems = albumItemsSort.map((album, index) => {
			const focus = resolveFocusDetails(album, focusedAlbum);
			return (
				<MemoizedAlbumItem
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
		<>
			<IntroductionPage
				isOpened={showIntroPage}
				onClose={() => handleOpenIntroPage(false)}
			/>
			<GridButton
				onOpenIntroPage={() => handleOpenIntroPage(true)}
				onShuffleAlbum={handleShuffleAlbumFocus}
			/>
			{isZoomedOut && (
				<GridCloseZoombutton>
					<ActionButton
						icon="close"
						isSelected={false}
						isFlat={true}
						onClick={() => setIsZoomedOut(false)}
					/>
				</GridCloseZoombutton>
			)}
			<GridWrapper
				ref={containerDivRef}
				size={tileSize}
				isZoomedOut={isZoomedOut}
			>
				<GridSimilarAlbumsTitle isZoomedOut={isZoomedOut}>
					<span> Similar albums to </span> {focusedAlbum?.albumName}{' '}
					<span>by</span> {focusedAlbum?.artistName}
				</GridSimilarAlbumsTitle>
				<SelectedAlbum
					selectedAlbum={selectedAlbum}
					albumPosition={selectedPosition}
					onDismiss={handleDismiss}
					onSelect={handleSelectRelatedAlbum}
					onShuffle={handleShuffleAlbumSelect}
					allAlbums={albums}
				/>
				{GridMatrix}
			</GridWrapper>
		</>
	);
};
