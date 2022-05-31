import { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { GridItem } from './GridItem/GridItem';
import { AlbumDetails } from '../../common/dataTypes';
import { IAlbumsGridProps } from './AlbumsGrid.types';
import { DEFAULT_GRID_TILE_SIZE } from '../../common/consts';
import { resolveFocusDetails } from '../../utils/albumFocusHandler';
import { GridWrapper } from './AlbumsGrid.styles';
import { useImagePrefetch } from '../../hooks/useImagePrefetch';

const OverlayBackground = styled.div`
	position: fixed; /* Sit on top of the page content */
	display: block; /* Hidden by default */
	width: 100%; /* Full width (cover the whole page) */
	height: 100%; /* Full height (cover the whole page) */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7); /* Black background with opacity */
	z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
	cursor: pointer; /* Add a pointer on hover */
	animation: fadeIn 1s;
	-webkit-animation: fadeIn 1s;
	-moz-animation: fadeIn 1s;
	-o-animation: fadeIn 1s;
	-ms-animation: fadeIn 1s;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-o-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const AlbumsGrid: FC<IAlbumsGridProps> = ({
	data,
	tileSize = DEFAULT_GRID_TILE_SIZE,
}) => {
	const [focusedAlbum, setFocusedAlbum] = useState<AlbumDetails>();
	const { idToImageMapping } = useImagePrefetch(data);

	const handleFocusAlbum = useCallback((album: AlbumDetails) => {
		setFocusedAlbum(album);
	}, []);

	const GridMatrix = useMemo(() => {
		if (!data) {
			return [];
		}

		const albumItems = Object.values(data)
			.slice(0, 500)
			.map((album) => {
				const focus = resolveFocusDetails(album, focusedAlbum);
				const albumImage = idToImageMapping[album.id];
				return (
					<GridItem
						key={album.id}
						album={album}
						image={albumImage}
						onHover={handleFocusAlbum}
						isFocused={focus.isFocused}
						isNeighbour={focus.isNeighbour}
					/>
				);
			});

		return albumItems;
	}, [data, focusedAlbum, handleFocusAlbum, idToImageMapping]);

	if (GridMatrix.length <= 0) {
		return null;
	}

	return <GridWrapper size={tileSize}>{GridMatrix}</GridWrapper>;

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
