import { useState } from 'react';
import './App.css';
import { DEFAULT_GRID_TILE_SIZE } from './common/consts';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
import { GridButton } from './components/GridButton/GridButton';
import { GridLoader } from './components/GridLoader/GridLoader';
import { OpenPage } from './components/OpenPage/OpenPage';
import { YoutubePlayerContextProvider } from './components/YoutubePlayer/YoutubePlayerContextProvider';
import { useAlbumsData } from './hooks/useAlbumsData';

const TILE_SIZE = 40;
const ALBUMS_AMOUNT = 3567;

export const App = () => {
	const { isLoading, albums } = useAlbumsData(ALBUMS_AMOUNT);
	const [ showOpenPage, setShowOpenPage ] = useState<boolean>(true);
	const bestAlbumsNeighbors = ["aaab19e9-1836-41f4-8c07-5155a425bbd3", "0137cfe7-16fa-4413-9a44-15929edd03a3", "04dda6c4-bd4b-4230-bc5c-dcf3cbc48ecc"];

	if (isLoading) {
		return <GridLoader />;
	}

	if (!albums) {
		return null;
	}

	const openPageHandler = () => {
		setShowOpenPage(true);
	};

	return (
		<div className="App">
			<YoutubePlayerContextProvider>
				<OpenPage isShown={showOpenPage}/>
				<GridButton openPageHandler={() => openPageHandler()}/>
				<AlbumsGrid albums={albums} tileSize={TILE_SIZE} bestAlbumsNeighbors={bestAlbumsNeighbors}/>
			</YoutubePlayerContextProvider>
		</div>
	);
};
