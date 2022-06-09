import './App.css';
import { DEFAULT_GRID_TILE_SIZE } from './common/consts';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
import { GridButton } from './components/GridButton/GridButton';
import { GridLoader } from './components/GridLoader/GridLoader';
import { LearnMorePage } from './components/LearnMorePage/LearnMorePage';
import { OpenPage } from './components/OpenPage/OpenPage';
import { YoutubePlayerContextProvider } from './components/YoutubePlayer/YoutubePlayerContextProvider';
import { useAlbumsData } from './hooks/useAlbumsData';

const TILE_SIZE = 40;
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
				<GridButton/>
				<AlbumsGrid albums={albums} tileSize={TILE_SIZE} />
				<LearnMorePage/>
			</YoutubePlayerContextProvider>
		</div>
	);
};