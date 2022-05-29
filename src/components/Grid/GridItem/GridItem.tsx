import React, { FC, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import randomColor from 'randomcolor';
import { GridItemId } from '../../../common/types';
import { idToString } from '../../../utils/idHandler';

export interface IGridItemProps {
	id: GridItemId;
	onHover: (id: GridItemId) => void;
	onClick: (id: GridItemId) => void;
	isFocused: boolean;
	isNeighbour: boolean;
}

export const GridItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url('https://live.staticflickr.com/65535/52108107108_be2a3f8b4a_t.jpg');
	background-size: contain;

	&.hover {
		-webkit-transform: scale(2.5);
		-moz-transform: scale(2.5);
		-ms-transform: scale(2.5);
		transform: scale(2.5);
		-webkit-transition: -webkit-transform 0.25s;
		-moz-transition: -moz-transform 0.25s;
		-ms-transition: -ms-transform 0.25s;
		transition: transform 0.25s;
	}

	&.neighbour {
		-webkit-transform: scale(1.5);
		-moz-transform: scale(1.5);
		-ms-transform: scale(1.5);
		transform: scale(1.5);
		-webkit-transition: -webkit-transform 0.5s;
		-moz-transition: -moz-transform 0.5s;
		-ms-transition: -ms-transform 0.5s;
		transition: transform 0.5s;
	}
`;

export const GridItemText = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: white;
	user-select: none;
`;

export const GridItem: FC<IGridItemProps> = ({
	id,
	onHover,
	onClick,
	isNeighbour,
	isFocused,
}) => {
	const handleHover = useCallback(() => {
		onHover(id);
	}, [id, onHover]);

	const handleClick = useCallback(() => {
		onClick(id);
	}, [id, onClick]);

	const className = useMemo(() => {
		if (isFocused) {
			return 'hover';
		}
		if (isNeighbour) {
			return 'neighbour';
		}
		return '';
	}, [isFocused, isNeighbour]);

	return (
		<GridItemWrapper
			key={idToString(id)}
			onMouseEnter={handleHover}
			onClick={handleClick}
			className={className}
		>
			<GridItemText>{isFocused ? idToString(id) : ''}</GridItemText>
		</GridItemWrapper>
	);
};
