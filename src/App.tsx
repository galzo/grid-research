import './App.css';
import { useMediaQuery } from 'react-responsive';
import { bestAlbumsNeighbors, DEFAULT_GRID_TILE_SIZE } from './common/consts';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
import { GridLoader } from './components/GridLoader/GridLoader';
import { YoutubePlayerContextProvider } from './components/YoutubePlayer/YoutubePlayerContextProvider';
import { useAlbumsData } from './hooks/useAlbumsData';
import {MobilePage} from './components/MobilePage/MobilePage';

const TILE_SIZE = 40;
const ALBUMS_AMOUNT = 3567;

export const App = () => {
	const { isLoading, albums } = useAlbumsData(ALBUMS_AMOUNT);
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

	if(isMobile){
		return <MobilePage/>
	}

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
