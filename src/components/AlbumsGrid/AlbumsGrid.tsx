import { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { AlbumItem } from './AlbumItem/AlbumItem';
import { Album, AlbumData } from '../../common/dataTypes';
import { IAlbumsGridProps } from './AlbumsGrid.types';
import { DEFAULT_GRID_TILE_SIZE } from '../../common/consts';
import { resolveFocusDetails } from '../../utils/ui/albumFocusHandler';
import { GridWrapper } from './AlbumsGrid.styles';
import { GridItemPosition } from '../../common/uiTypes';
import { SelectedAlbum } from '../SelectedAlbum/SelectedAlbum';
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
					isRelated={focus.isRelated}
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
			<SelectedAlbum
				selectedAlbum={selectedAlbum}
				albumPosition={selectedPosition}
				onDismiss={handleDismiss}
			/>
			{GridMatrix}
		</GridWrapper>
	);
};
