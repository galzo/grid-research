import styled from 'styled-components';
import { FadeInDiv } from '../../Base/FadeInDiv';

export const RelatedAlbumsContainer = styled.div`
	width: 100%;
	height: 100%;
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

export const RelatedAlbumPlaceholder = styled.div`
	width: 108px;
	height: 108px;
	min-width: 119px;
`;

export const RelatedAlbumContainer = styled(FadeInDiv)`
	width: 104px;
	height: 104px;
	min-width: 115px;
	border: 2px solid white;
	border-radius: 4px;
	background-size: contain;
	z-index: 5;
	/* margin-right: 40px; */
	-webkit-box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	box-shadow: 7px 7px 14px -8px rgba(0, 0, 0, 0.81);
	cursor: pointer; /* Add a pointer on hover */
`;

export const RelatedAlbumImage = styled.img`
	width: 100%;
	height: 100%;
	transition: all 1000ms ease-in-out;
`;
