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
	font-family: 'Gotham-book';
	color: rgba(255, 255, 255, 0.8);
	margin-bottom: 25px;
`;

export const SimilarAlbumNameContainer = styled(FadeInDiv)`
	text-align: left ;
	line-height: 12px;
	margin-top: 10px;
`;

export const SimilarAlbumName = styled.span`
	font-weight: 400;
	font-size: 14px;
	line-height: 12px;
	font-family: 'Gotham-bold';
	color: white;
	line-height: 12px;
`;

export const SimilarAlbumArtistName = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	font-family: 'Gotham-book';
	color: rgba(255, 255, 255, 0.8);
	margin-top: 5px;
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
	/* margin-right: 40px; */
	-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	cursor: pointer; /* Add a pointer on hover */

`;

export const SimilarAlbumImage = styled.img`
	width: 100%;
	height: 100%;
	transition: all 1000ms ease-in-out;
`;
