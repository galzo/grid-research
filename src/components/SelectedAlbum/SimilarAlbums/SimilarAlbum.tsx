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
} from './SimilarAlbums.styles';
import { ISimilarAlbumProps } from './SimilarAlbums.types';
import graphicOverview from '../../../assets/exampleGraphicOveview2.png';

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

	const imageToRender = useMemo(() => {
		return showGraphicOverview ? graphicOverview : albumImage;
	}, [albumImage, showGraphicOverview]);

	if (!shouldRender) {
		return <SimilarAlbumPlaceholder />;
	}

	return (
		<SimilarAlbumContainer onClick={handleClick}>
			<SimilarAlbumImage src={imageToRender} />
		</SimilarAlbumContainer>
	);
};
