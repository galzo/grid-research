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
	const bestAlbumsNeighbors = ["26b060ff-fcbf-469d-a64f-9a775fbc384d", "1c862372-5c10-4d75-b54a-572955bc62ef", "2335e1a4-9310-4ae6-a36e-8a121eac7bb8", 
	"0137cfe7-16fa-4413-9a44-15929edd03a3", "3254fec2-7d11-397e-82a7-e26ca3ab2e0f", "27e29456-990c-40c2-9070-1514d21d25e2", 
	"1a28a203-4ebb-33e2-9584-edd54b71c14d", "3cd3587f-8eaf-427b-bd84-cb2f21bed994", "319c4e8c-f799-4547-baad-1e931739788d", 
	"355ceb72-1ed8-466e-8fbe-3f93138aa189", "3cf9cbcb-6a64-492a-9ac7-c6fdabb0767f", "3258ad21-d24d-45f1-8357-089e0ed5dc10", 
	"0c155a34-f9ed-4ade-a676-3ac0d48ead17", "1f40b8b2-dd27-4554-8e64-0139a6b5bb39", "3413dee4-af20-4105-aa9a-91f3fe17da58",
	"9e6886e7-b1bb-484d-b152-fe7d90c3e973", "0055dbfb-9bf5-45d3-9c11-069128ee9212", "2c8f74c1-94d3-4ef7-9c97-ec24b471c923",
	"1488d974-6b32-4bbb-8f50-c90d268c7c02"];

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
