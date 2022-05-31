import { FC, useCallback, useMemo, useRef } from 'react';
import { IGridItemProps } from './GridItem.types';
import { resolveGridItemClassName } from '../../../utils/classNamesHandler';
import { GridItemImage } from './GridItem.styles';

export const GridItem: FC<IGridItemProps> = ({
	album,
	onHover,
	isFocused,
	isNeighbour,
	image,
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

	if (!image) {
		return <div>{'loading'}</div>;
	}

	return (
		<GridItemImage
			ref={ref}
			key={album.id}
			imageUrl={album.thumbnails.small}
			onMouseEnter={handleHover}
			onClick={handleClick}
			className={className}
		></GridItemImage>
	);
};
