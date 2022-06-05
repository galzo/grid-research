import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { AlbumData } from '../../../common/dataTypes';

interface IAlbumDetailsProps {
	album: AlbumData;
}

const AlbumDetailsContainer = styled.div`
	width: 730px;
	height: 580px;
	margin-top: 80px;
	margin-bottom: 50px;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.span`
	font-size: 36px;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham';
	margin-bottom: 8px;
`;

const Subtitle = styled.span`
	font-size: 16px;
	color: #ffffff;
	font-weight: 400;
	font-family: 'Gotham-light';
	padding-left: 4px;
`;

const resolveAlbumSubtitle = (album: AlbumData) => {
	const artistName = album.artistName ? `${album.artistName}` : '';
	const albumReleaseYear = album.releaseYear ? ` | ${album.releaseYear}` : '';
	const albumGenre = album.genre ? ` | ${album.genre}` : '';

	return `${artistName}${albumReleaseYear}${albumGenre}`;
};

export const AlbumDetails: FC<IAlbumDetailsProps> = ({ album }) => {
	const subtitleContent = useMemo(() => {
		return resolveAlbumSubtitle(album);
	}, [album]);

	return (
		<AlbumDetailsContainer>
			<TitleContainer>
				<Title>{album.albumName}</Title>
				<Subtitle>{subtitleContent}</Subtitle>
			</TitleContainer>
		</AlbumDetailsContainer>
	);
};
