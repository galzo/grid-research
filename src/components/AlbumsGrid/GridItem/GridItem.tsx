import { FC, useCallback, useMemo, useRef } from 'react';
import { IGridItemProps } from './GridItem.types';
import { GridItemImage, GridItemWrapper } from './GridItem.styles';
import { resolveGridItemClassName } from '../../../utils/ui/classNamesHandler';

export const GridItem: FC<IGridItemProps> = ({
	album,
	onHover,
	isFocused,
	isNeighbour,
	itemSize,
}) => {
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

	if (!album) {
		return null;
	}

	if (!album.image) {
		return <div>{'loading'}</div>;
	}

	return (
		<GridItemImage
			src={album.image}
			loading={'lazy'}
			imageSize={itemSize}
			alt={album.albumName}
			ref={ref}
			key={album.id}
			onMouseEnter={handleHover}
			onClick={handleClick}
			className={className}
		/>
	);
};
