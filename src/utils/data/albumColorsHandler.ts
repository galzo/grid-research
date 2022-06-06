import { orderBy } from 'lodash';
import { AlbumColor } from '../../common/dataTypes';

const convertDecimalToHexa = (value: number): string => {
	const convertedValue = value.toString(16);
	const shouldPad = convertedValue.length === 1;
	return shouldPad ? `0${convertedValue}` : convertedValue;
};

const convertRgbToHex = (albumColor: number[]): string => {
	if (!albumColor || albumColor.length < 3) {
		return '';
	}

	const [red, green, blue] = albumColor;
	const adaptedRed = convertDecimalToHexa(red);
	const adaptedGreen = convertDecimalToHexa(green);
	const adaptedBlue = convertDecimalToHexa(blue);
	return `#${adaptedRed}${adaptedGreen}${adaptedBlue}`;
};

const adaptAlbumColor = (albumColor: number[]): AlbumColor => {
	const hexColor = convertRgbToHex(albumColor);
	return {
		color: hexColor,
		priority: albumColor[4],
	};
};

export const adaptAlbumColors = (albumColors: number[][]): AlbumColor[] => {
	if (!albumColors || albumColors.length <= 0) {
		return [];
	}

	const adaptedColors = albumColors.map(adaptAlbumColor);
	return orderBy(adaptedColors, (color) => color.priority).reverse();
};
