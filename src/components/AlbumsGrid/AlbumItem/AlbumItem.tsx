import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IAlbumItemProps } from './AlbumItem.types';
import { AlbumItemImage, AlbumItemPlaceholder } from './AlbumItem.styles';
import { resolveGridItemClassName } from '../../../utils/ui/classNamesHandler';
import { useDelayedRender } from '../../../hooks/useDelayedRender';
import { GridItemPosition } from '../../../common/uiTypes';
import { useFocusClass } from './useFocusClass';

export const AlbumItem: FC<IAlbumItemProps> = ({
	album,
	albumIndex,
	onHover,
	onClick,
	isFocused,
	isRelated,
	itemSize,
}) => {
	const { shouldRender } = useDelayedRender(albumIndex * 2);
	const { className } = useFocusClass(isFocused, isRelated);
	const ref = useRef<any>(null);

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

	if (!shouldRender) {
		return <AlbumItemPlaceholder />;
	}

	return (
		<AlbumItemImage
			ref={ref}
			key={album.id}
			src={album.image}
			imageSize={itemSize}
			alt={album.albumName}
			onMouseEnter={handleHover}
			onClick={handleClick}
			className={className}
			loading={'lazy'}
		/>
	);
};
