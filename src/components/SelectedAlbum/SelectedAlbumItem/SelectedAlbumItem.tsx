import React, { FC, useEffect, useMemo, useState } from 'react';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import {
	FixedItemWrapper,
	SelectedItemWrapper,
} from './SelectedAlbumItem.styles';
import { ISelectedAlbumItemProps } from './SelectedAlbumItem.types';

export const SelectedAlbumItem: FC<ISelectedAlbumItemProps> = ({
	position,
	album,
	onDismiss,
}) => {
	const [isTriggered, setIsTriggered] = useState(false);
	const [albumImage, setAlbumImage] = useState(album.image);

	// Trigger item enlargemenet animation
	useEffect(() => {
		setTimeout(() => {
			setIsTriggered(true);
		}, 0);
	}, [position]);

	// Fetch higer resolution of the image
	useEffect(() => {
		const fetchLargeImage = async () => {
			const image = await fetchImage(album.thumbnails.large);
			setAlbumImage(image);
		};

		setTimeout(fetchLargeImage, 500);
	}, [album]);

	return (
		<FixedItemWrapper onClick={onDismiss}>
			<SelectedItemWrapper
				position={position}
				className={isTriggered ? 'enlarge' : ''}
				image={albumImage}
			/>
		</FixedItemWrapper>
	);
};
