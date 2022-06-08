import { AlbumData, AlbumId } from '../../../common/dataTypes';

export interface ISimilarAlbumsProps {
	selectedAlbum: AlbumData;
	albums: AlbumData[];
	onClick: (album: AlbumData) => void;
}

export interface ISimilarAlbumProps {
	album: AlbumData;
	albumIndex: number;
	onClick: (album: AlbumData) => void;
	showGraphicOverview: boolean;
}
