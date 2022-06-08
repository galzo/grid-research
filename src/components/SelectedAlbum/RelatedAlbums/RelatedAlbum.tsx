import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';
import { fetchImage } from '../../../utils/data/albumImageFetcher';
import { useHighResImage } from '../../../hooks/useHighResImage';
import { useDelayedRender } from '../../../hooks/useDelayedRender';
import {
	RelatedAlbumContainer,
	RelatedAlbumImage,
	RelatedAlbumPlaceholder,
} from './RelatedAlbums.styles';
import { IRelatedAlbumProps } from './RelatedAlbums.types';

export const RelatedAlbum: React.FunctionComponent<IRelatedAlbumProps> = ({
	album,
	albumIndex,
	onClick,
}) => {
	const { shouldRender } = useDelayedRender(albumIndex * 100);
	const { albumImage } = useHighResImage(album);

	const handleClick = useCallback(() => {
		onClick(album);
	}, [album, onClick]);

	if (!shouldRender) {
		return <RelatedAlbumPlaceholder />;
	}

	return (
		<RelatedAlbumContainer onClick={handleClick}>
			<RelatedAlbumImage src={albumImage} />
		</RelatedAlbumContainer>
	);
};
