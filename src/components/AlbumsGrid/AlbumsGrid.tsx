import { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { AlbumItem } from './AlbumItem/AlbumItem';
import { Album, AlbumData } from '../../common/dataTypes';
import { IAlbumsGridProps } from './AlbumsGrid.types';
import { DEFAULT_GRID_TILE_SIZE } from '../../common/consts';
import { resolveFocusDetails } from '../../utils/ui/albumFocusHandler';
import { GridWrapper } from './AlbumsGrid.styles';
import { GridItemPosition } from '../../common/uiTypes';
import { SelectedAlbumOverlay } from '../SelectedAlbum/SelectedAlbumOverlay';
import { useFocusAlbum } from '../../hooks/useFocusAlbum';

export const AlbumsGrid: FC<IAlbumsGridProps> = ({
	albums,
	tileSize = DEFAULT_GRID_TILE_SIZE,
}) => {
	const { focusedAlbum, handleFocusAlbum } = useFocusAlbum();
	const [selectedAlbum, setSelectedAlbum] = useState<AlbumData>();
	const [selectedPosition, setSelectedPosition] =
		useState<GridItemPosition>();

	const handleClick = useCallback(
		(album: AlbumData, position: GridItemPosition) => {
			handleFocusAlbum(undefined);
			setSelectedAlbum(album);
			setSelectedPosition(position);
		},
		[handleFocusAlbum],
	);

	const handleDismiss = useCallback(() => {
		setSelectedAlbum(undefined);
		setSelectedPosition(undefined);
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
					onClick={handleClick}
					isFocused={focus.isFocused}
					isNeighbour={focus.isNeighbour}
					itemSize={tileSize}
				/>
			);
		});

		return albumItems;
	}, [albums, focusedAlbum, handleClick, handleFocusAlbum, tileSize]);

	if (GridMatrix.length <= 0) {
		return null;
	}

	return (
		<GridWrapper size={tileSize}>
			<SelectedAlbumOverlay
				selectedAlbum={selectedAlbum}
				albumPosition={selectedPosition}
				onDismiss={handleDismiss}
			/>
			{GridMatrix}
		</GridWrapper>
	);

	// const [hoverId, setHoverId] = useState<GridItemId>();
	// const [selectedId, setSelectedId] = useState<GridItemId>();
	// const [selectedPosition, setSelectedPosition] =
	// 	useState<GridItemPosition>();
	// const handleHover = useCallback((id: GridItemId) => {
	// 	setHoverId(id);
	// }, []);
	// const handleClick = useCallback(
	// 	(id: GridItemId, position: GridItemPosition) => {
	// 		setHoverId(undefined);
	// 		setSelectedId(id);
	// 		setSelectedPosition(position);
	// 	},
	// 	[],
	// );
	// const Matrix = useMemo(() => {
	// 	getAlbumsData();
	// 	const dimensions = buildDimensionsMatrix(rows, columns);
	// 	const matrix = dimensions.rows.map((row) => {
	// 		return dimensions.columns.map((col) => {
	// 			const currentId: GridItemId = { row, col };
	// 			const isHovered = areIdsEqual(currentId, hoverId);
	// 			const hoverItem = {
	// 				row: hoverId?.row || 0,
	// 				col: hoverId?.col || 0,
	// 			};
	// 			const randomCandidate = {
	// 				row: hoverItem.row + 1,
	// 				col: hoverItem.col + 1,
	// 			};
	// 			const isRandomCandidate = areIdsEqual(
	// 				currentId,
	// 				randomCandidate,
	// 			);
	// 			return (
	// 				<GridItem
	// 					key={idToString(currentId)}
	// 					id={currentId}
	// 					onHover={handleHover}
	// 					onClick={handleClick}
	// 					isFocused={isHovered}
	// 					isNeighbour={isRandomCandidate}
	// 				/>
	// 			);
	// 		});
	// 	});
	// 	return flattenArray(matrix);
	// }, [columns, handleClick, handleHover, hoverId, rows]);
	// const Overlay = useMemo(() => {
	// 	return selectedId ? <OverlayBackground /> : null;
	// }, [selectedId]);
	// const SelectedItemComponent = useMemo(() => {
	// 	if (!selectedId || !selectedPosition) return null;
	// 	return <SelectedItem itemId={selectedId} position={selectedPosition} />;
	// }, [selectedId, selectedPosition]);
	// return (
	// 	<GridWrapper size={size}>
	// 		{SelectedItemComponent}
	// 		{Overlay}
	// 		{Matrix}
	// 	</GridWrapper>
	// );
};
