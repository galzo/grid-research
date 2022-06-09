import './App.css';
import { DEFAULT_GRID_TILE_SIZE } from './common/consts';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
import { GridLoader } from './components/GridLoader/GridLoader';
import { OpenPage } from './components/OpenPage/OpenPage';
import { YoutubePlayerContextProvider } from './components/YoutubePlayer/YoutubePlayerContextProvider';
import { useAlbumsData } from './hooks/useAlbumsData';

const TILE_SIZE = 30;
const ALBUMS_AMOUNT = 1500;

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
				<OpenPage/>
				<AlbumsGrid albums={albums} tileSize={TILE_SIZE} />
			</YoutubePlayerContextProvider>
		</div>
	);
};
