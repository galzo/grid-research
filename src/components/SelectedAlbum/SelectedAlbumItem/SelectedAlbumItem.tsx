import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useHighResImage } from '../../../hooks/useHighResImage';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import {
	SelectedItemImage,
	SelectedItemWrapper,
} from './SelectedAlbumItem.styles';
import { ISelectedAlbumItemProps } from './SelectedAlbumItem.types';

export const SelectedAlbumItem: FC<ISelectedAlbumItemProps> = ({
	position,
	album,
	onDismiss,
}) => {
	const { albumImage } = useHighResImage(album);
	const [albumSize, setAlbumSize] = useState<'small' | 'large'>('small');

	// Trigger item enlargemenet animation
	useEffect(() => {
		setAlbumSize('large');
	}, []);

	return (
		<SelectedItemWrapper
			size={albumSize}
			onClick={onDismiss}
			position={position}
		>
			<SelectedItemImage src={albumImage} />
		</SelectedItemWrapper>
	);
};
