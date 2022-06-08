import React, { FC } from 'react';
import styled from 'styled-components';
import { Album } from '../../../../../common/dataTypes';
import {
	CharacteristicsContainer,
	DrawingCharacteristic,
	FashionCharacteristic,
	GeometricCharacteristic,
	MusicalCharacteristic,
	PhotographCharacteristic,
	UrbanCharacteristic,
} from './Characteristics.styles';

interface ICharacteristicsProps {
	album: Album;
}

export const Characteristics: React.FunctionComponent<
	ICharacteristicsProps
> = ({ album }) => {
	return (
		<CharacteristicsContainer>
			<DrawingCharacteristic isActive={album.isDrawing}>
				{'drawing'}
			</DrawingCharacteristic>
			<PhotographCharacteristic isActive={album.isPhotography}>
				{'photography'}
			</PhotographCharacteristic>
			<MusicalCharacteristic isActive={album.isMusical}>
				{'musical'}
			</MusicalCharacteristic>
			<GeometricCharacteristic isActive={album.isGeometric}>
				{'geometric'}
			</GeometricCharacteristic>
			<FashionCharacteristic isActive={album.isFashion}>
				{'fashion'}
			</FashionCharacteristic>
			<UrbanCharacteristic isActive={album.isUrban}>
				{'urban'}
			</UrbanCharacteristic>
		</CharacteristicsContainer>
	);
};
