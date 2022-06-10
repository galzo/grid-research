import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import { useHighResImage } from '../../../hooks/useHighResImage';
import { useDelayedRender } from '../../../hooks/useDelayedRender';
import {
	SimilarAlbumContainer,
	SimilarAlbumImage,
	SimilarAlbumPlaceholder,
	SimilarAlbumName,
	SimilarAlbumArtistName,
	SimilarAlbumNameContainer,
	SimilarAlbumGraphic
} from './SimilarAlbums.styles';
import { ISimilarAlbumProps } from './SimilarAlbums.types';

export const SimilarAlbum: React.FunctionComponent<ISimilarAlbumProps> = ({
	album,
	albumIndex,
	onClick,
	showGraphicOverview,
}) => {
	const { shouldRender } = useDelayedRender(albumIndex * 100);
	const { albumImage } = useHighResImage(album);

	const handleClick = useCallback(() => {
		onClick(album);
	}, [album, onClick]);

	// const imageToRender = useMemo(() => {
	// 	return showGraphicOverview
	// 		? `https://hatechnolog.com/static/syncover/images/${album.id}.png`
	// 		: albumImage;
	// }, [album.id, albumImage, showGraphicOverview]);

	if (!shouldRender) {
		return <SimilarAlbumPlaceholder />;
	}

	return (
		<SimilarAlbumContainer onClick={handleClick}>
			<SimilarAlbumGraphic isGraphic={showGraphicOverview} src={`https://hatechnolog.com/static/syncover/images/${album.id}.png`} />
			<SimilarAlbumImage isGraphic={showGraphicOverview} src={albumImage} />
			<SimilarAlbumNameContainer>
				<SimilarAlbumName>{album.albumName}</SimilarAlbumName>
				<SimilarAlbumArtistName>{album.artistName}</SimilarAlbumArtistName>
			</SimilarAlbumNameContainer>
		</SimilarAlbumContainer>
	);
};
