import { AlbumData, AlbumId } from '../../../common/dataTypes';

export interface ISimilarAlbumsProps {
	selectedAlbum: AlbumData;
	albums: AlbumData[];
	onClick: (album: AlbumData) => void;
	onShuffleClick: (albumIds: AlbumId[]) => void;
}

export interface ISimilarAlbumProps {
	album: AlbumData;
	albumIndex: number;
	onClick: (album: AlbumData) => void;
}
