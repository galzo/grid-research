import styled from 'styled-components';

export const CharacteristicsContainer = styled.div`
	position: absolute;
	width: 609px;
	height: 444px;
	z-index: 6;
`;

export const CharacteristicText = styled.span<{
	isActive: boolean;
}>`
	font-size: 15px;
	line-height: 18px;
	font-family: 'Gotham';
	font-weight: 400;
	opacity: ${({ isActive }) => (isActive ? 1 : 0.33)};
	color: #ffffff;
	text-transform: uppercase;
	position: absolute;
`;

export const DrawingCharacteristic = styled(CharacteristicText)`
	top: 0px;
	left: 168px;
`;

export const PhotographCharacteristic = styled(CharacteristicText)`
	top: 0;
	left: 345px;
`;

export const MusicalCharacteristic = styled(CharacteristicText)`
	top: 213px;
	left: 25px;
`;

export const GeometricCharacteristic = styled(CharacteristicText)`
	top: 213px;
	left: 505px;
`;

export const FashionCharacteristic = styled(CharacteristicText)`
	top: 430px;
	left: 168px;
`;

export const UrbanCharacteristic = styled(CharacteristicText)`
	top: 430px;
	left: 370px;
`;
