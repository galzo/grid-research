import React, { useEffect, useMemo, useState } from 'react';
import Spotify from 'react-spotify-embed';
import './App.css';
import { DEFAULT_GRID_TILE_SIZE } from './common/consts';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
import { fetchAlbums } from './utils/data/albumDataLoader';
import { AlbumImage } from './common/dataTypes';
import { fetchAlbumImages } from './utils/data/albumImageFetcher';
import { useAlbumsData } from './hooks/useAlbumsData';

const TILE_SIZE = DEFAULT_GRID_TILE_SIZE;
const ALBUMS_AMOUNT = 2000;

export const App = () => {
	const { isLoading, albums } = useAlbumsData(ALBUMS_AMOUNT);

	if (isLoading) {
		return <div>{'loading'}</div>;
	}

	if (!albums) {
		return null;
	}

	return (
		<div className="App">
			<AlbumsGrid albums={albums} tileSize={TILE_SIZE} />
		</div>
	);
};
