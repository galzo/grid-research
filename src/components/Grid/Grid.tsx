import { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { buildDimensionsMatrix, flattenArray } from '../../utils/arrayHandler';
import { GridItem } from './GridItem/GridItem';

interface IGridProps {
	rows: number;
	columns: number;
	size: number;
}

const GridWrapper = styled.div<{ size: number }>`
	width: 100%;
	display: grid;
	box-sizing: border-box;
	grid-template-columns: ${({ size }) =>
		`repeat(auto-fill, minmax(${size}px, 1fr));`};
	grid-auto-rows: ${({ size }) => `minmax(${size}px, 1fr)`};
	column-gap: 1px;
	row-gap: 1px;
`;

export const Grid: FC<IGridProps> = ({ rows, columns, size }) => {
	const [hoverId, setHoverId] = useState<string>();

	const handleHover = useCallback((id: string) => {
		setHoverId(id);
	}, []);

	const Matrix = useMemo(() => {
		const dimensions = buildDimensionsMatrix(rows, columns);

		const matrix = dimensions.rows.map((row) => {
			return dimensions.columns.map((col) => {
				const currentId = `${row}${col}`;
				const shouldBlur = Boolean(hoverId && hoverId !== currentId);
				return (
					<GridItem
						key={currentId}
						id={currentId}
						onHover={handleHover}
						isBlurred={shouldBlur}
					/>
				);
			});
		});

		return flattenArray(matrix);
	}, [columns, handleHover, hoverId, rows]);

	return <GridWrapper size={size}>{Matrix}</GridWrapper>;
};
