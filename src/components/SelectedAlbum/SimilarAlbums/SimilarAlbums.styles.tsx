import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

export const SimilarAlbumsContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0 120px 50px 150px;
	z-index: 6;
`;

export const SimilarAlbumsTitle = styled.span`
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: rgba(255, 255, 255, 0.8);
	margin-bottom: 25px;
`;

export const SimilarAlbumArtistName = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	color: rgba(255, 255, 255, 0.8);
	margin-top: 2px;
`;

export const SimilarAlbumsLineContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

export const SimilarAlbumPlaceholder = styled.div`
	width: 108px;
	height: 108px;
	min-width: 119px;
`;

export const SimilarAlbumContainer = styled(FadeInDiv)`
	width: 104px;
	height: 104px;
	min-width: 115px;
	border: 1px solid rgba(255, 255, 255, 0.6);
	background-size: contain;
	z-index: 5;
	position: relative;
	-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	&:hover{
		cursor: pointer;
	}
`;

export const SimilarAlbumName = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 1.15em;
	color: white;
`;

export const SimilarAlbumNameContainer = styled.div`
	text-align: left ;
	line-height: 12px;
	margin-top: 16px;
	opacity: 0;
	transition: all 0.2s;
	
	${SimilarAlbumContainer}:hover & {
		opacity: 1;
	}
`;

export const SimilarAlbumGraphic = styled.img<{isGraphic: boolean}>`
	width: 100%;
	height: 100%;
	position: absolute;
	top:0;
	left:0;
	transform: scale(1.3);
	opacity: ${({isGraphic}) => isGraphic ? '1' : '0'};
	transition: all 0.2s;
	${SimilarAlbumContainer}:hover && {
		opacity: ${({isGraphic}) => isGraphic ? '0' : '1'};
	}
`;

export const SimilarAlbumImage = styled.img<{isGraphic: boolean}>`
	width: 100%;
	height: 100%;
	transition: all 0.2s;
	opacity: ${({isGraphic}) => isGraphic ? '0' : '1'};
	${SimilarAlbumContainer}:hover && {
		opacity: ${({isGraphic}) => isGraphic ? '1' : '0'};
	}
`;
