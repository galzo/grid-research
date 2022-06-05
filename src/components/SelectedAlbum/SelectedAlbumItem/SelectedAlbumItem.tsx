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
	const [albumImage, setAlbumImage] = useState(album.image);
	const [albumSize, setAlbumSize] = useState<'small' | 'large'>('small');

	// Trigger item enlargemenet animation
	useEffect(() => {
		setAlbumSize('large');
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
		<SelectedItemWrapper
			size={albumSize}
			onClick={onDismiss}
			position={position}
			image={albumImage}
		>
			<SelectedItemImage src={albumImage} />
		</SelectedItemWrapper>
	);
};
