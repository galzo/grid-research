import React, { FC, useMemo } from 'react';
import { AlbumColorsContainer, AlbumColorWrapper } from './AlbumColors.styles';
import { IAlbumColorsProps } from './AlbumColors.types';

export const AlbumColors: FC<IAlbumColorsProps> = ({ album }) => {
	const AlbumColorElements = useMemo(() => {
		const colorsToRender = album.colors;
		if (!colorsToRender || colorsToRender.length <= 0) {
			return null;
		}

		return colorsToRender.map((color) => {
			return <AlbumColorWrapper color={color.color} />;
		});
	}, [album.colors]);

	return <AlbumColorsContainer>{AlbumColorElements}</AlbumColorsContainer>;
};
