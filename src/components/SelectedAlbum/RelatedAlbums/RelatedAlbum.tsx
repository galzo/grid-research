import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import { useHighResImage } from '../../../hooks/useHighResImage';
import { useDelayedRender } from '../../../hooks/useDelayedRender';

interface IRelatedAlbumProps {
	album: AlbumData;
	albumIndex: number;
	onClick: (album: AlbumData) => void;
}

export const RelatedAlbumContainer = styled.div`
	width: 115px;
	height: 115px;
	min-width: 115px;
	border: 2px solid white;
	border-radius: 4px;
	background-color: gray;
	background-color: #282c34;
	background-size: contain;
	z-index: 5;
	margin-right: 40px;
	-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	cursor: pointer; /* Add a pointer on hover */
	animation: fadeIn 1s;
	-webkit-animation: fadeIn 1s;
	-moz-animation: fadeIn 1s;
	-o-animation: fadeIn 1s;
	-ms-animation: fadeIn 1s;
`;

export const RelatedAlbumImage = styled.img`
	width: 100%;
	height: 100%;
	transition: all 1000ms ease-in-out;
`;

export const RelatedAlbum: React.FunctionComponent<IRelatedAlbumProps> = ({
	album,
	albumIndex,
	onClick,
}) => {
	const { shouldRender } = useDelayedRender(albumIndex * 200);
	const { albumImage } = useHighResImage(album);

	const handleClick = useCallback(() => {
		onClick(album);
	}, [album, onClick]);

	if (!shouldRender) return null;

	return (
		<RelatedAlbumContainer onClick={handleClick}>
			<RelatedAlbumImage src={albumImage} />
		</RelatedAlbumContainer>
	);
};
