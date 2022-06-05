import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { RelatedAlbum } from './RelatedAlbum';

interface IRelatedAlbumsProps {
	albums: AlbumData[];
	onClick: (album: AlbumData) => void;
}

export const RelatedAlbumsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	overflow: auto;
	white-space: nowrap;

	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

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

	return <RelatedAlbumsContainer>{AlbumComponents}</RelatedAlbumsContainer>;
};
