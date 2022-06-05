import React, { FC } from 'react';
import styled from 'styled-components';

interface IRelatedAlbumsProps {
	hello?: 'world';
}

export const RelatedAlbumsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const RelatedAlbum = styled.div`
	width: 115px;
	height: 115px;
	border: 1px solid white;
	border-radius: 4px;
	background-color: gray;
`;

export const RelatedAlbums: FC<IRelatedAlbumsProps> = (props) => {
	return (
		<RelatedAlbumsContainer>
			<RelatedAlbum />
			<RelatedAlbum />
			<RelatedAlbum />
			<RelatedAlbum />
			<RelatedAlbum />
		</RelatedAlbumsContainer>
	);
};
