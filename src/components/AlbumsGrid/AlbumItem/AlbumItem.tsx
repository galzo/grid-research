import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IAlbumItemProps } from './AlbumItem.types';
import { AlbumItemContainer, AlbumItemImage, AlbumItemPlaceholder, AlbumItemZoomOutButton } from './AlbumItem.styles';
import { resolveGridItemClassName } from '../../../utils/ui/classNamesHandler';
import { useDelayedRender } from '../../../hooks/useDelayedRender';
import { GridItemPosition } from '../../../common/uiTypes';
import { useFocusClass } from './useFocusClass';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import SampleImage from '../../../assets/grid_sample_24.jpg';

export const AlbumItem: FC<IAlbumItemProps> = ({
	album,
	albumIndex,
	onFocus,
	onClick,
	isFocused,
	isRelated,
	isHovered,
	isZoomOut,
	handleZoomOut,
	itemSize,
}) => {
	const [albumImage, setAlbumImage] = useState(album.image);
	const { shouldRender } = useDelayedRender(albumIndex * 2);
	const { className } = useFocusClass(isFocused, isRelated, isHovered);
	const ref = useRef<any>(null);

	useEffect(() => {
		const fetchImageForFocus = async () => {
			if (className === 'focus') {
				const highResImage = await fetchImage(album.thumbnails.large);
				setAlbumImage(highResImage);
				return;
			}

			setAlbumImage(album.image);
		};
		fetchImageForFocus();
	}, [album.image, album.thumbnails.large, className]);

	const handleFocus = useCallback(() => {
		onFocus(album);
	}, [album, onFocus]);

	const handleClick = useCallback(() => {
		
		if (isZoomOut && className === 'none') {
			handleZoomOut(false);
			// handleFocus();
			return;
		}
		
		const { top, bottom, left, right } =
			ref.current.getBoundingClientRect();

		const position: GridItemPosition = {
			top,
			bottom,
			left,
			right,
		};

		onClick(album, position);
	}, [album, onClick]);

	if (!shouldRender) {
		return <AlbumItemPlaceholder />;
	}

	return (
		<AlbumItemContainer 
			// onMouseEnter={handleFocus} 
			className={className}
			imageSize={itemSize}
			isZoomOut={isZoomOut}
			>
			<AlbumItemImage
				ref={ref}
				key={album.id}
				// src={albumImage}
				src={SampleImage}
				imageSize={itemSize}
				alt={album.albumName}
				onClick={handleClick}
				loading={'lazy'}
			/>
			<AlbumItemZoomOutButton onClick={() => {handleZoomOut(true); handleFocus();}} imageSize={itemSize}>
				Zoom out
			</AlbumItemZoomOutButton>
		</AlbumItemContainer>
	);
};
