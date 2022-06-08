import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useHighResImage } from '../../../hooks/useHighResImage';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import {
	SelectedItemImage,
	SelectedItemWrapper,
} from './SelectedAlbumItem.styles';
import { ISelectedAlbumItemProps } from './SelectedAlbumItem.types';
import { GridItemPosition } from '../../../common/uiTypes';
import { useWindowWidth } from '../../../hooks/useWindowResize';

export const SelectedAlbumItem: FC<ISelectedAlbumItemProps> = ({
	position,
	album,
	onDismiss,
}) => {
	const { albumImage } = useHighResImage(album);
	const [albumSize, setAlbumSize] = useState<'small' | 'large'>('small');
	const { windowWidth } = useWindowWidth();

	// Trigger item enlargemenet animation
	useEffect(() => {
		setAlbumSize('large');
	}, []);

	const targetPosition: GridItemPosition = useMemo(() => {
		return {
			top: 60,
			bottom: 0,
			right: 0,
			left: windowWidth - 586 - 60,
		};
	}, [windowWidth]);

	return (
		<SelectedItemWrapper
			size={albumSize}
			onClick={onDismiss}
			sourcePosition={position}
			targetPosition={targetPosition}
		>
			<SelectedItemImage src={albumImage} />
		</SelectedItemWrapper>
	);
};
