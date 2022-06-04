import React, { FC, useEffect, useState } from 'react';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import {
	FixedItemWrapper,
	SelectedItemWrapper,
} from './SelectedAlbumItem.styles';
import { ISelectedAlbumItemProps } from './SelectedAlbumItem.types';

export const SelectedAlbumItem: FC<ISelectedAlbumItemProps> = ({
	position,
	album,
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

		fetchLargeImage();
	}, [album]);

	return (
		<FixedItemWrapper>
			<SelectedItemWrapper
				position={position}
				className={isTriggered ? 'enlarge' : ''}
				image={albumImage}
			/>
		</FixedItemWrapper>
	);
};
