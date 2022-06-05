import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { RelatedAlbum } from './RelatedAlbum';

interface IRelatedAlbumsProps {
	albums: AlbumData[];
}

export const RelatedAlbumsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const RelatedAlbums: FC<IRelatedAlbumsProps> = ({ albums }) => {
	const AlbumComponents = useMemo(() => {
		return albums.map((album, index) => {
			return <RelatedAlbum album={album} albumIndex={index} />;
		});
	}, [albums]);

	return <RelatedAlbumsContainer>{AlbumComponents}</RelatedAlbumsContainer>;
};
