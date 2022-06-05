import React, { FC, useEffect, useMemo, useState } from 'react';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import {
	FixedItemWrapper,
	SelectedItemImage,
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
		setIsTriggered(true);
	}, []);

	// Fetch higer resolution of the image and hot-swap it on the fly
	useEffect(() => {
		const fetchLargeImage = async () => {
			const highResImage = await fetchImage(album.thumbnails.large);
			setAlbumImage(highResImage);
		};

		fetchLargeImage();
	}, [album]);

	return (
		<FixedItemWrapper onClick={onDismiss}>
			<SelectedItemWrapper
				position={position}
				className={isTriggered ? 'enlarge' : ''}
				image={albumImage}
			>
				<SelectedItemImage src={albumImage} />
			</SelectedItemWrapper>
		</FixedItemWrapper>
	);
};
