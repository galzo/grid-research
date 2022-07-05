import './App.css';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
import { GridLoader } from './components/GridLoader/GridLoader';
import { YoutubePlayerContextProvider } from './components/YoutubePlayer/YoutubePlayerContextProvider';
import { useAlbumsData } from './hooks/useAlbumsData';

const TILE_SIZE = 40;
const ALBUMS_AMOUNT = 3567;

export const App = () => {
	const { isLoading, albums } = useAlbumsData(ALBUMS_AMOUNT);

	if (isLoading) {
		return <GridLoader />;
	}

	if (!albums) {
		return null;
	}

	return (
		<div className="App">
			<YoutubePlayerContextProvider>
				<AlbumsGrid albums={albums} tileSize={TILE_SIZE} />
			</YoutubePlayerContextProvider>
		</div>
	);
};
