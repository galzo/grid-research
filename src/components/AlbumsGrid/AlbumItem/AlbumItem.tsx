import {
	FC,
	memo,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { IAlbumItemProps } from './AlbumItem.types';
import {
	AlbumItemContainer,
	AlbumItemImage,
	AlbumItemPlaceholder,
	MemoizedImage,
} from './AlbumItem.styles';
import { resolveGridItemClassName } from '../../../utils/ui/classNamesHandler';
import { useDelayedRender } from '../../../hooks/useDelayedRender';
import { GridItemPosition } from '../../../common/uiTypes';
import { useFocusClass } from './useFocusClass';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import { ZoomOutButton } from './ZoomOutButton';
import { useZoomButton } from './useZoomButton';
import { useIsVisible } from '../../../hooks/useIsVisible';

export const AlbumItem: FC<IAlbumItemProps> = ({
	album,
	albumIndex,
	onHover,
	onClick,
	onZoomOut,
	isFocused,
	isRelated,
	itemSize,
	isGridZoomedOut,
}) => {
	const ref = useRef<any>(null);
	const [albumImage, setAlbumImage] = useState(album.image);
	const { shouldRender } = useDelayedRender(100);
	const { className } = useFocusClass(isFocused, isRelated, isGridZoomedOut);
	const { shouldRenderButton } = useZoomButton(isFocused, isGridZoomedOut);
	const { isVisible } = useIsVisible(ref);

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

	const handleHover = useCallback(() => {
		onHover(album);
	}, [album, onHover]);

	const handleClick = useCallback(() => {
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

	const isDisabledByZoom = useMemo(() => {
		if (!isGridZoomedOut) {
			return false;
		}

		return !isFocused && !isRelated;
	}, [isFocused, isGridZoomedOut, isRelated]);

	if (!isVisible || !shouldRender) {
		return <AlbumItemPlaceholder ref={ref} />;
	}

	return (
		<AlbumItemContainer
			ref={ref}
			key={album.id}
			imageSize={itemSize}
			isDisabled={isDisabledByZoom}
			isGridZoomedOut={isGridZoomedOut}
			onMouseEnter={handleHover}
			onClick={handleClick}
			className={className}
		>
			<ZoomOutButton
				onClick={onZoomOut}
				shouldRender={shouldRenderButton}
			/>
			<MemoizedImage
				src={albumImage}
				imageSize={itemSize}
				alt={album.albumName}
				onMouseEnter={handleHover}
				onClick={handleClick}
				className={className}
			/>
		</AlbumItemContainer>
	);
};

export const MemoizedAlbumItem = memo(AlbumItem);
