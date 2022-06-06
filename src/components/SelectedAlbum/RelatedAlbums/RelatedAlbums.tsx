import React, { FC, useCallback, useMemo } from 'react';
import { ActionButtons } from './ActionButtons/ActionButtons';
import { RelatedAlbum } from './RelatedAlbum';
import { RelatedAlbumsContainer } from './RelatedAlbums.styles';
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
			{AlbumComponents}
			<ActionButtons onClickShuffle={handleShuffleClick} />
		</RelatedAlbumsContainer>
	);
};
