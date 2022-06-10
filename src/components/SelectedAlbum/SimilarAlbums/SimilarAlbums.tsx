import React, { FC, useCallback, useMemo, useState } from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import { SimilarAlbum } from './SimilarAlbum';
import {
	SimilarAlbumsContainer,
	SimilarAlbumsLineContainer,
	SimilarAlbumsTitle,
} from './SimilarAlbums.styles';
import { ISimilarAlbumsProps } from './SimilarAlbums.types';

export const SimilarAlbums: FC<ISimilarAlbumsProps> = ({
	selectedAlbum,
	albums,
	onClick,
}) => {
	const [showGraphicOverview, setShowGraphicOverview] = useState(false);

	const handleClickShowGraphicOverview = useCallback(() => {
		setShowGraphicOverview(!showGraphicOverview);
	}, [showGraphicOverview]);

	const AlbumComponents = useMemo(() => {
		return albums.map((album, index) => {
			return (
				<SimilarAlbum
					album={album}
					albumIndex={index}
					onClick={onClick}
					showGraphicOverview={showGraphicOverview}
				/>
			);
		});
	}, [albums, onClick, showGraphicOverview]);

	return (
		<SimilarAlbumsContainer>
			<SimilarAlbumsTitle>{'Similar albums:'}</SimilarAlbumsTitle>
			<SimilarAlbumsLineContainer>
				{AlbumComponents}
				<ActionButton
					isSelected={showGraphicOverview}
					icon={showGraphicOverview?"graphicOverviewFull":"graphicOverview"}
					onClick={handleClickShowGraphicOverview}
				/>
			</SimilarAlbumsLineContainer>
		</SimilarAlbumsContainer>
	);
};
