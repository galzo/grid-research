import React, { FC } from 'react';
import styled from 'styled-components';
import { ActionButton } from '../ActionButton/ActionButton';

export interface IAlbumHeader {
	onCloseClick: VoidFunction;
	onShuffleClick: VoidFunction;
}

const AlbumHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 250px;
	box-sizing: border-box;
	padding: 10px 40px 0;
`;

export const AlbumHeader: FC<IAlbumHeader> = ({
	onCloseClick,
	onShuffleClick,
}) => {
	return (
		<AlbumHeaderContainer>
			<ActionButton icon={'close'} onClick={onCloseClick} isFlat={true} />
			<ActionButton icon={'shuffle'} onClick={onShuffleClick} />
		</AlbumHeaderContainer>
	);
};
