import { AlbumData } from '../../../common/dataTypes';

export interface IRelatedAlbumsProps {
	albums: AlbumData[];
	onClick: (album: AlbumData) => void;
}

export interface IRelatedAlbumProps {
	album: AlbumData;
	albumIndex: number;
	onClick: (album: AlbumData) => void;
}
