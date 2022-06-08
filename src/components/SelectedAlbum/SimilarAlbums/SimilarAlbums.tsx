import React, { FC, useCallback, useMemo } from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import { SimilarAlbum } from './SimilarAlbum';
import {
	SimilarAlbumsContainer,
	SimilarAlbumsLineContainer,
	SimilarAlbumsTitle,
} from './SimilarAlbums.styles';
import { ISimilarAlbumsProps } from './SimilarAlbums.types';

export const SimilarAlbums: FC<ISimilarAlbumsProps> = ({
	selectedAlbum,
	albums,
	onClick,
	onShuffleClick,
}) => {
	const AlbumComponents = useMemo(() => {
		return albums.map((album, index) => {
			return (
				<SimilarAlbum
					album={album}
					albumIndex={index}
					onClick={onClick}
				/>
			);
		});
	}, [albums, onClick]);

	const handleShuffleClick = useCallback(() => {
		const albumIds = albums
			.map((album) => album.id)
			.filter((id) => id !== selectedAlbum.id);

		onShuffleClick(albumIds);
	}, [albums, onShuffleClick, selectedAlbum.id]);

	return (
		<SimilarAlbumsContainer>
			<SimilarAlbumsTitle>{'Similar albums:'}</SimilarAlbumsTitle>
			<SimilarAlbumsLineContainer>
				{AlbumComponents}
				<ActionButton icon="shuffle" onClick={handleShuffleClick} />
			</SimilarAlbumsLineContainer>
		</SimilarAlbumsContainer>
	);
};
