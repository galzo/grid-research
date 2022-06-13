import { useState } from 'react';
import './App.css';
import { bestAlbumsNeighbors, DEFAULT_GRID_TILE_SIZE } from './common/consts';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
import { GridButton } from './components/GridButton/GridButton';
import { GridLoader } from './components/GridLoader/GridLoader';
import { IntroductionPage } from './components/OpenPage/OpenPage';
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
