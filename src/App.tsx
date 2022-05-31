import React, { useEffect, useMemo, useState } from 'react';
import Spotify from 'react-spotify-embed';
import './App.css';
import { DEFAULT_GRID_TILE_SIZE } from './common/consts';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
import { getAlbumsData } from './utils/albumDataLoader';

export const App = () => {
	const albumsData = useMemo(() => {
		return getAlbumsData();
	}, []);

	return (
		<div className="App">
			<AlbumsGrid data={albumsData} tileSize={DEFAULT_GRID_TILE_SIZE} />
		</div>
	);
};
