import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import styled from 'styled-components';
import { YoutubePlayerContext } from './YoutubePlayerContext';

interface IYoutubePlayerProps {
	children: ReactNode;
}

const YoutubePlayerWrapper = styled.div`
	opacity: 0;
	position: absolute;
	bottom: 0;
`;

export const YoutubePlayerContextProvider: FC<IYoutubePlayerProps> = ({
	children,
}) => {
	const [playerElement, setPlayerElement] = useState<any>();
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentVideoId, setCurrentVideoId] = useState('');

	const pauseVideo = useCallback(() => {
		playerElement.pauseVideo();
		setIsPlaying(false);
	}, [playerElement]);

	const playVideo = useCallback(() => {
		playerElement.playVideo();
		setIsPlaying(true);
	}, [playerElement]);

	const handleVideoToggle = useCallback(() => {
		if (!currentVideoId) {
			return;
		}

		if (isPlaying) {
			pauseVideo();
		} else {
			playVideo();
		}
	}, [currentVideoId, isPlaying, pauseVideo, playVideo]);

	const handleSelectVideoId = useCallback(
		(videoId: string) => {
			pauseVideo();
			setCurrentVideoId(videoId);
		},
		[pauseVideo],
	);

	useEffect(() => {
		if (currentVideoId && playVideo) {
			playVideo();
		}
	}, [currentVideoId, playVideo]);

	return (
		<YoutubePlayerContext.Provider
			value={{
				isPlaying,
				toggleVideoPlay: handleVideoToggle,
				setVideoId: handleSelectVideoId,
			}}
		>
			<YoutubePlayerWrapper>
				<YouTube
					videoId={currentVideoId}
					onReady={(event) => {
						setPlayerElement(event.target);
					}}
				/>
			</YoutubePlayerWrapper>
			{children}
		</YoutubePlayerContext.Provider>
	);
};
