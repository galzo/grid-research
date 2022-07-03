import * as React from 'react';
import { useCallback } from 'react';
import { useHighResImage } from '../../../hooks/useHighResImage';
import { useDelayedRender } from '../../../hooks/useDelayedRender';
import {
	SimilarAlbumContainer,
	SimilarAlbumImage,
	SimilarAlbumPlaceholder,
	SimilarAlbumName,
	SimilarAlbumArtistName,
	SimilarAlbumNameContainer,
	SimilarAlbumGraphic,
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

	if (!shouldRender) {
		return <SimilarAlbumPlaceholder />;
	}

	return (
		<SimilarAlbumContainer onClick={handleClick}>
			<SimilarAlbumGraphic
				isGraphic={showGraphicOverview}
				src={`https://hatechnolog.com/static/syncover/images/${album.id}.png`}
			/>
			<SimilarAlbumImage
				isGraphic={showGraphicOverview}
				src={albumImage}
			/>
			<SimilarAlbumNameContainer>
				<SimilarAlbumName>{album.albumName}</SimilarAlbumName>
				<SimilarAlbumArtistName>
					{album.artistName}
				</SimilarAlbumArtistName>
			</SimilarAlbumNameContainer>
		</SimilarAlbumContainer>
	);
};
