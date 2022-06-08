import styled from 'styled-components';
import { FadeInDiv } from '../../../Base/FadeInDiv';

export const AlbumColorsContainer = styled(FadeInDiv)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const AlbumColorWrapper = styled.div<{ color: string }>`
	background-color: ${({ color }) => color};
	border: 1px solid #ffffff;
	margin-right: 10px;
	border-radius: 4px;
	width: 28px;
	height: 28px;
	flex-grow: 0;
	flex-shrink: 0;
`;
