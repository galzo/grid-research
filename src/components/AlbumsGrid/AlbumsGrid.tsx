import { FC, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { shuffle } from 'lodash';
import { AlbumItem } from './AlbumItem/AlbumItem';
import { Album, AlbumData, AlbumId } from '../../common/dataTypes';
import { IAlbumsGridProps } from './AlbumsGrid.types';
import { DEFAULT_GRID_TILE_SIZE } from '../../common/consts';
import { resolveFocusDetails } from '../../utils/ui/albumFocusHandler';
import { GridWrapper } from './AlbumsGrid.styles';
import { GridItemPosition } from '../../common/uiTypes';
import { SelectedAlbum } from '../SelectedAlbum/SelectedAlbum';
import { useFocusAlbum } from '../../hooks/useFocusAlbum';
import { YoutubePlayerContext } from '../YoutubePlayer/YoutubePlayerContext';

export const AlbumsGrid: FC<IAlbumsGridProps> = ({
	albums,
	tileSize = DEFAULT_GRID_TILE_SIZE,
}) => {
	const { focusedAlbum, handleFocusAlbum } = useFocusAlbum();
	const [selectedAlbum, setSelectedAlbum] = useState<AlbumData>();
	const [isZoomOut, setZoomOut] = useState(false)
	const [selectedPosition, setSelectedPosition] =
		useState<GridItemPosition>();
	const { setVideoId, isPlaying, toggleVideoPlay } =
		useContext(YoutubePlayerContext);

		const containerDivRef = useCallback((node: any) => {
			if (node !== null) {
				window.scrollTo(250,500);
			}
		}, []);

	

	const handleClickGridAlbum = useCallback(
		(album: AlbumData, position: GridItemPosition) => {
			handleFocusAlbum(undefined);
			setSelectedAlbum(album);
			setSelectedPosition(position);
			setVideoId(album.youtubeId);
		},
		[handleFocusAlbum, setVideoId],
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
	
	const zoomOutHandler = (shouldZoomOut: boolean) => {
		setZoomOut(shouldZoomOut);
	};

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
					onFocus={handleFocusAlbum}
					onClick={handleClickGridAlbum}
					isFocused={focus.isFocused}
					isRelated={focus.isRelated}
					isHovered={focus.isRelated}
					isZoomOut={isZoomOut}
					handleZoomOut={zoomOutHandler}
					itemSize={tileSize}
				/>
			);
		});

		return albumItems;
	}, [
		albums,
		focusedAlbum,
		handleClickGridAlbum,
		handleFocusAlbum,
		isZoomOut,
		tileSize,
	]);

	if (GridMatrix.length <= 0) {
		return null;
	}

	return (
		<GridWrapper ref={containerDivRef} size={tileSize}
		className={isZoomOut ? 'zoom-out' : 'no-zoom'}>
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
