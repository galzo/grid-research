import React, { FC, useCallback, useMemo } from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import { RelatedAlbum } from './RelatedAlbum';
import {
	RelatedAlbumsContainer,
	RelatedAlbumsLineContainer,
	RelatedAlbumsTitle,
} from './RelatedAlbums.styles';
import { IRelatedAlbumsProps } from './RelatedAlbums.types';

export const RelatedAlbums: FC<IRelatedAlbumsProps> = ({
	albums,
	onClick,
	onShuffleClick,
}) => {
	const AlbumComponents = useMemo(() => {
		return albums.map((album, index) => {
			return (
				<RelatedAlbum
					album={album}
					albumIndex={index}
					onClick={onClick}
				/>
			);
		});
	}, [albums, onClick]);

	const handleShuffleClick = useCallback(() => {
		const albumIds = albums.map((album) => album.id);
		onShuffleClick(albumIds);
	}, [albums, onShuffleClick]);

	return (
		<RelatedAlbumsContainer>
			<RelatedAlbumsTitle>{'Similar albums:'}</RelatedAlbumsTitle>
			<RelatedAlbumsLineContainer>
				{AlbumComponents}
				<ActionButton icon="shuffle" onClick={handleShuffleClick} />
			</RelatedAlbumsLineContainer>
		</RelatedAlbumsContainer>
	);
};
