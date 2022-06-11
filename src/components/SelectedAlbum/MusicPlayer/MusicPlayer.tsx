import React, { FC, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { Album } from '../../../common/dataTypes';
import { FadeInDiv } from '../../Base/FadeInDiv';
import sound from '../../../assets/sound.gif';
import soundOff from '../../../assets/soundOff.gif';
import play from '../../../assets/play.png';
import pause from '../../../assets/pause.png';
import { YoutubePlayerContext } from '../../YoutubePlayer/YoutubePlayerContext';
import { IMusicPlayerProps } from './MusicPlayer.types';
import { useDelayedRender } from '../../../hooks/useDelayedRender';
import {
	LeftSideContainer,
	MusicPlayerContainer,
	PlayButton,
	PlayerAnimation,
	SongName,
} from './MusicPlayer.styles';

export const MusicPlayer: FC<IMusicPlayerProps> = ({ album }) => {
	const { isPlaying, toggleVideoPlay } = useContext(YoutubePlayerContext);
	const { shouldRender } = useDelayedRender(500);

	const PlayAnimation = useMemo(() => {
		return isPlaying ? sound : soundOff;
	}, [isPlaying]);

	const ButtonIcon = useMemo(() => {
		return isPlaying ? pause : play;
	}, [isPlaying]);

	if (!shouldRender) {
		return null;
	}

	return (
		<MusicPlayerContainer>
			<LeftSideContainer>
				<PlayButton src={ButtonIcon} onClick={toggleVideoPlay} />
				<SongName>{album.trackName}</SongName>
			</LeftSideContainer>
			<PlayerAnimation src={PlayAnimation} alt="playerIndicator" />
		</MusicPlayerContainer>
	);
};
