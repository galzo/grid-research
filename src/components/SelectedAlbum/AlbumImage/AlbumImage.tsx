import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useHighResImage } from '../../../hooks/useHighResImage';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import { AlbumImg, AlbumImageWrapper } from './AlbumImage.styles';
import { IAlbumImageProps } from './AlbumImage.types';
import { GridItemPosition } from '../../../common/uiTypes';
import { useWindowWidth } from '../../../hooks/useWindowResize';
import { MusicPlayer } from '../MusicPlayer/MusicPlayer';

export const AlbumImage: FC<IAlbumImageProps> = ({ position, album }) => {
	const { albumImage } = useHighResImage(album);
	const [albumSize, setAlbumSize] = useState<'small' | 'large'>('small');
	const { windowWidth } = useWindowWidth();

	// Trigger item enlargemenet animation
	useEffect(() => {
		setAlbumSize('large');
	}, []);

	const targetPosition: GridItemPosition = useMemo(() => {
		return {
			top: 70,
			bottom: 0,
			right: 0,
			left: windowWidth - 586 - 220,
		};
	}, [windowWidth]);

	return (
		<AlbumImageWrapper
			size={albumSize}
			sourcePosition={position}
			targetPosition={targetPosition}
		>
			<AlbumImg src={albumImage} />
			<MusicPlayer album={album} />
		</AlbumImageWrapper>
	);
};
