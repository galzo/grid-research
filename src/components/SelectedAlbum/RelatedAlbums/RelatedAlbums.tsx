import React, { FC, useMemo } from 'react';
import { ActionButtons } from './ActionButtons/ActionButtons';
import { RelatedAlbum } from './RelatedAlbum';
import { RelatedAlbumsContainer } from './RelatedAlbums.styles';
import { IRelatedAlbumsProps } from './RelatedAlbums.types';

export const RelatedAlbums: FC<IRelatedAlbumsProps> = ({ albums, onClick }) => {
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

	return (
		<RelatedAlbumsContainer>
			{AlbumComponents}
			<ActionButtons />
		</RelatedAlbumsContainer>
	);
};
