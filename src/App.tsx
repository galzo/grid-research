import './App.css';
import { DEFAULT_GRID_TILE_SIZE } from './common/consts';
import { AlbumsGrid } from './components/AlbumsGrid/AlbumsGrid';
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
