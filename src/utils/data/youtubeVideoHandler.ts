const YOUTUBE_HOST = 'www.youtube.com';
const VALID_VIDEO_ID_LENGTH = 11;

const parseUrl = (url: string): URL | undefined => {
	try {
		return new URL(url);
	} catch (e) {
		console.error(`failed parsing youtube URL. ${url}`);
		return undefined;
	}
};

export const getYoutubeVideoIdFromURL = (url: string): string | undefined => {
	const parsedUrl = parseUrl(url);
	if (!parsedUrl) return undefined;

	const isYoutubeHost = parsedUrl.host === YOUTUBE_HOST;
	const isWatchPage = parsedUrl.pathname.includes('/watch');
	if (!isYoutubeHost || !isWatchPage) return undefined;

	const videoId = parsedUrl.searchParams.get('v') || '';
	const isValidId = videoId.length === VALID_VIDEO_ID_LENGTH;
	return isValidId ? videoId : undefined;
};
