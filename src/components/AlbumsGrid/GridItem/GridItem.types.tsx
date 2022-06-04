import { Album, AlbumData } from '../../../common/dataTypes';

export interface IGridItemProps {
	album: AlbumData;
	onHover: (album: Album) => void;
	isFocused: boolean;
	isNeighbour: boolean;
	itemSize: number;
}
