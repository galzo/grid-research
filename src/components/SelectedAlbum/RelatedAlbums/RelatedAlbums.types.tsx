import { AlbumData, AlbumId } from '../../../common/dataTypes';

export interface IRelatedAlbumsProps {
	albums: AlbumData[];
	onClick: (album: AlbumData) => void;
	onShuffleClick: (albumIds: AlbumId[]) => void;
}

export interface IRelatedAlbumProps {
	album: AlbumData;
	albumIndex: number;
	onClick: (album: AlbumData) => void;
}
