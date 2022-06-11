import React, { FC } from 'react';
import styled from 'styled-components';
import { Album } from '../../../common/dataTypes';
import { FadeInDiv } from '../../Base/FadeInDiv';

interface IMusicPlayerProps {
	album: Album;
}

const MusicPlayerContainer = styled(FadeInDiv)`
	width: 565px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const SongName = styled.span`
	font-family: 'Gotham';
	font-weight: 400;
	font-size: 14px;
	color: #ffffff;
`;

export const MusicPlayer: FC<IMusicPlayerProps> = ({ album }) => {
	return (
		<MusicPlayerContainer>
			<SongName>{album.albumName}</SongName>
		</MusicPlayerContainer>
	);
};
