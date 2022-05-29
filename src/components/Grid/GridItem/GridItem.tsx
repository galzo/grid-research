import React, { FC, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import randomColor from 'randomcolor';

export interface IGridItemProps {
	id: string;
	onHover: (id: string) => void;
	isBlurred: boolean;
}

export const GridItemWrapper = styled.div<{ color: string }>`
	background-color: ${({ color }) => color};
	display: flex;
	align-items: center;
	justify-content: center;

	&.hover {
		-webkit-transform: scale(2);
		-moz-transform: scale(2);
		-ms-transform: scale(2);
		transform: scale(2);
		-webkit-transition: -webkit-transform 0.25s;
		-moz-transition: -moz-transform 0.25s;
		-ms-transition: -ms-transform 0.25s;
		transition: transform 0.25s;
	}
`;

export const GridItemId = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: white;
	user-select: none;
`;

export const GridItem: FC<IGridItemProps> = ({ id, onHover, isBlurred }) => {
	const handleHover = useCallback(() => {
		onHover(id);
	}, [id, onHover]);

	const itemColor = useMemo(() => {
		return randomColor();
	}, []);

	return (
		<GridItemWrapper
			color={itemColor}
			key={id}
			onMouseEnter={handleHover}
			className={isBlurred ? '' : 'hover'}
		>
			<GridItemId>{isBlurred ? '' : id}</GridItemId>
		</GridItemWrapper>
	);
};
