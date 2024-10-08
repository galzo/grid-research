import { noop } from 'lodash';
import { createContext } from 'react';

export interface IYoutubePlayerContext {
	isPlaying: boolean;
	toggleVideoPlay: VoidFunction;
	setVideoId: (videoId: string) => void;
	videoId?: string;
}

export const YoutubePlayerContext = createContext<IYoutubePlayerContext>({
	isPlaying: false,
	toggleVideoPlay: noop,
	setVideoId: noop,
	videoId: undefined,
});
