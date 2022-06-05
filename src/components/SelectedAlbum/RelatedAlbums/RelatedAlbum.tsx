import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import { useHighResImage } from '../../../hooks/useHighResImage';

interface IRelatedAlbumProps {
	album: AlbumData;
}

export const RelatedAlbumContainer = styled.div`
	width: 115px;
	height: 115px;
	border: 1px solid white;
	border-radius: 4px;
	background-color: gray;
	background-color: #282c34;
	background-size: contain;
	z-index: 5;
`;

export const RelatedAlbumImage = styled.img`
	width: 100%;
	height: 100%;
	transition: all 1000ms ease-in-out;
`;

export const RelatedAlbum: React.FunctionComponent<IRelatedAlbumProps> = ({
	album,
}) => {
	const { albumImage } = useHighResImage(album);

	return (
		<RelatedAlbumContainer>
			<RelatedAlbumImage src={albumImage} />
		</RelatedAlbumContainer>
	);
};
