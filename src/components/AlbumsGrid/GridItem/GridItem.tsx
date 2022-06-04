import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IGridItemProps } from './GridItem.types';
import { GridItemImage, GridItemPlaceholder } from './GridItem.styles';
import { resolveGridItemClassName } from '../../../utils/ui/classNamesHandler';
import { useDelayedRender } from '../../../hooks/useDelayedRender';

export const GridItem: FC<IGridItemProps> = ({
	album,
	albumIndex,
	onHover,
	isFocused,
	isNeighbour,
	itemSize,
}) => {
	const { shouldRender } = useDelayedRender(albumIndex * 2);
	const ref = useRef<any>(null);

	const handleHover = useCallback(() => {
		onHover(album);
	}, [album, onHover]);

	const handleClick = useCallback(() => {
		alert('click!');
		// const dimensions = ref.current.getBoundingClientRect();
		// const position: GridItemPosition = {
		// 	top: dimensions.top,
		// 	bottom: dimensions.bottom,
		// 	left: dimensions.left,
		// 	right: dimensions.right,
		// };
		// onClick(id, position);
	}, []);

	const className = useMemo(() => {
		return resolveGridItemClassName(isFocused, isNeighbour);
	}, [isFocused, isNeighbour]);

	if (!shouldRender) {
		return <GridItemPlaceholder color={'#282c34'} />;
	}

	return (
		<GridItemImage
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
